import {Component} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import { Cathegory } from "./Cathegory";
import { Question } from "./Question";

@Component({
    selector: "min-app",
    templateUrl:"./app/ShowCathegories.html" 
})
export class ShowAllCathegories {
    public allCathegories: Array<Cathegory>;
    public laster: string;
    public questions: Array<Question>;

    constructor(private _http: Http) { }

    getAllCathegories() {
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

    getQuestions(id : number) {
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
                        this.questions.push(
                            new Question(
                                question.id,
                                question.questionText,
                                question.answerText,
                                question.cathegory
                            ));
                    };
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/question")
            );
    }


}

