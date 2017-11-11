"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Question_1 = require("./Question");
var ShowAllQuestions = (function () {
    function ShowAllQuestions(_http) {
        this._http = _http;
    }
    ShowAllQuestions.prototype.getAllQuestions = function () {
        var _this = this;
        this.laster = "Vennligst vent";
        this._http.get("api/question/")
            .map(function (resultat) {
            var JsonData = resultat.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.allQuestions = [];
            _this.laster = "";
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var question = JsonData_1[_i];
                    _this.allQuestions.push(new Question_1.Question(question.id, question.questionText, question.answerText, question.cathegory));
                }
                ;
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/question"); });
    };
    return ShowAllQuestions;
}());
ShowAllQuestions = __decorate([
    core_1.Component({
        selector: "min-app",
        templateUrl: "./app/ShowQuestions.html"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ShowAllQuestions);
exports.ShowAllQuestions = ShowAllQuestions;
//# sourceMappingURL=showAllQuestions.js.map