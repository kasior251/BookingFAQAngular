import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { ShowAllCathegories } from './showAllCathegories';
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, JsonpModule],
    declarations: [ShowAllCathegories],
    bootstrap: [ShowAllCathegories]
})
export class AppModule { }

