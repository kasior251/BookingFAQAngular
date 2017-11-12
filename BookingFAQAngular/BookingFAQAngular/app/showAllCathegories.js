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
var Cathegory_1 = require("./Cathegory");
var Question_1 = require("./Question");
var ShowAllCathegories = (function () {
    function ShowAllCathegories(_http) {
        this._http = _http;
    }
    ShowAllCathegories.prototype.getAllCathegories = function () {
        var _this = this;
        this.laster = "Vennligst vent";
        this._http.get("api/cathegory/")
            .map(function (resultat) {
            var JsonData = resultat.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.allCathegories = [];
            _this.laster = "";
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var cathegory = JsonData_1[_i];
                    _this.allCathegories.push(new Cathegory_1.Cathegory(cathegory.id, cathegory.name));
                }
                ;
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/cathegory"); });
    };
    ShowAllCathegories.prototype.getQuestions = function (id) {
        var _this = this;
        this.laster = "Vennligst vent";
        this._http.get("api/question/" + id)
            .map(function (resultat) {
            var JsonData = resultat.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.questions = [];
            _this.laster = "";
            if (JsonData) {
                for (var _i = 0, JsonData_2 = JsonData; _i < JsonData_2.length; _i++) {
                    var question = JsonData_2[_i];
                    _this.questions.push(new Question_1.Question(question.id, question.questionText, question.answerText, question.cathegory));
                }
                ;
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/question"); });
    };
    return ShowAllCathegories;
}());
ShowAllCathegories = __decorate([
    core_1.Component({
        selector: "min-app",
        templateUrl: "./app/ShowCathegories.html"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ShowAllCathegories);
exports.ShowAllCathegories = ShowAllCathegories;
//# sourceMappingURL=showAllCathegories.js.map