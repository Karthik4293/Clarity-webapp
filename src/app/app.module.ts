import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { OpenGrokComponent } from './open-grok/open-grok.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { FilterComponent } from './filter/filter.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        OpenGrokComponent,
        AnalyzeComponent,
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

