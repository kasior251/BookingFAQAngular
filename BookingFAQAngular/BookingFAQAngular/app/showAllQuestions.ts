import {Component} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Question} from "./Question";

@Component({
    selector: "min-app",
    templateUrl:"./app/ShowQuestions.html" 
})
export class ShowAllQuestions {
    public allQuestions: Array<Question>;
    public laster: string;

    constructor(private _http: Http) { }

    getAllQuestions() {
        this.laster = "Vennligst vent";
        this._http.get("api/question/")
            .map(resultat => {
                let JsonData = resultat.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.allQuestions = [];
                this.laster = "";
                if (JsonData) {
                    for (let question of JsonData) {
                        this.allQuestions.push(
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

