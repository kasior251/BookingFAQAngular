import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { ShowAllCathegories } from './showAllCathegories';
@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule],
    declarations: [ShowAllCathegories],
    bootstrap: [ShowAllCathegories]
})
export class AppModule { }

