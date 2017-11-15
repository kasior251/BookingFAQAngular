import { Component, OnInit } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Cathegory } from "./Cathegory";
import { Question } from "./Question";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms"


@Component({
    selector: "min-app",
    templateUrl:"./app/ShowCathegories.html" 
})
export class ShowAllCathegories {
    public allCathegories: Array<Cathegory>;
    public laster: string;
    public questions: Array<Question>;
    public answer: string;
    public showForm: boolean;
    public scheme: FormGroup;
    public questionSubmitted: boolean;
    public hideNewQuestionButton: boolean;
    public newQuestions: Array<Question>;
    public adminMode: boolean;
    public contact: boolean;

    constructor(private _http: Http, private fb: FormBuilder) {
        this.contact = false;
        this.adminMode = false;
        this.showForm = false;
        this.questionSubmitted = false;
        this.hideNewQuestionButton = true;
        this.scheme = fb.group({
            cathegory: [null, Validators.compose([Validators.required, null])],
            newQuestion: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZåøæÅØÆ0-9\\-.,?! ]{10,200}")])],
            email: [null, Validators.compose([Validators.required, Validators.pattern("[a-z0-9\._%+-]+\@[a-z0-9\.-]+\.[a-z]{2,4}")])]
        });
    }

    getAllCathegories() {
        this.contact = false;
        this.adminMode = false;
        this.questionSubmitted = false;
        this.showForm = false;
        this.laster = "Vennligst vent";
        this._http.get("api/cathegory/")
            .map(resultat => {
                let JsonData = resultat.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.allCathegories = [];
                this.laster = "";
                if (JsonData) {
                    for (let cathegory of JsonData) {
                        this.allCathegories.push(
                            new Cathegory(
                                cathegory.id,
                                cathegory.name
                            ));
                    };
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/cathegory")
        );
       
    }

    getQuestions(id: number) {
        this.contact = false;
        this.adminMode = false;
        this.questionSubmitted = false;
        this.showForm = false;
        this.laster = "Vennligst vent";
        this._http.get("api/question/" + id  )
            .map(resultat => {
                let JsonData = resultat.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.questions = [];
                this.laster = "";
                if (JsonData) {
                    for (let question of JsonData) {
                        this.questions.push(question);
                    };
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/question")
            );
    }

    getAnswer(id: number, text: string) {
        this.contact = false;
        this.adminMode = false;
        this.hideNewQuestionButton = false;
        this.questionSubmitted = false;
        var divId = "answer" + id;
        if (document.getElementById(divId).innerHTML == "") {
            document.getElementById(divId).innerHTML = text;
        }
        else
            document.getElementById(divId).innerHTML = "";
        
    }

    showNewQuestionForm() {
        this.contact = false;
        this.adminMode = false;
        this.questionSubmitted = false;
        this.showForm = true;
        this.hideNewQuestionButton = true;
        this.scheme.setValue({
            cathegory: "",
            newQuestion: "",
            email: ""
        });
    }

    submitQuestion() {
        this.saveQuestion();
    }

    saveQuestion() {
        var newQuestion = new Question();
        newQuestion.questionText = this.scheme.value.newQuestion;
        newQuestion.cathegory = this.scheme.value.cathegory;

        var body: string = JSON.stringify(newQuestion);
        var headers = new Headers({ "Content-Type": "application/json" });

        this._http.post("api/question", body, { headers: headers })
            .map(returnData => returnData.toString())
            .subscribe(
            returned => {
                this.showForm = false; 
                this.questionSubmitted = true;
            },
            error => alert(error),
            () => console.log("Done post-api/question")
            );
    };

    clearForm() {
        this.scheme.setValue({
            cathegory: "",
            newQuestion: "",
            email: ""
        });
    }

    showSentQuestions() {
        this.contact = false;
        this.questionSubmitted = false;
        this.showForm = false;
        this.hideNewQuestionButton = true;
        this.adminMode = true;
        this._http.get("api/question/")
            .map(resultat => {
                let JsonData = resultat.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.newQuestions = [];
                this.laster = "";
                if (JsonData) {
                    for (let q of JsonData) {
                        this.newQuestions.push(q);
                    };
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/question")
            );

    }

    contactInfo() {
        this.questionSubmitted = false;
        this.showForm = false;
        this.hideNewQuestionButton = true;
        this.adminMode = false;
        this.contact = true;
    }

    backToMain() {
        window.location.href = "http://bookingsystem2017xxx.azurewebsites.net/";
    }

}

