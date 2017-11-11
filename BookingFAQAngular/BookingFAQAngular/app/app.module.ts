import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { ShowAllQuestions } from './showAllQuestions';
@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule],
    declarations: [ShowAllQuestions],
    bootstrap: [ShowAllQuestions]
})
export class AppModule { }

