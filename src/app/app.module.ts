import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { FilterComponent } from './filter/filter.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
    declarations: [
        AppComponent,
        FilterComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING,
        NgxPaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule {
}

