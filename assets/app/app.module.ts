import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LetterRecallComponent } from './letterRecall/letterRecall.component';
import { LetterGridComponent } from './letterRecall/letterGrid/letterGrid.component';
import { LetterComponent } from './letterRecall/letter/letter.component';
import { RecalledLettersComponent } from './letterRecall/recalledLetters/recalledLetters.component';
import { ReadingComponent } from './reading/reading.component';
import { SentenceDisplayComponent } from './reading/sentence/sentenceDisplay.component'
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
        LetterGridComponent,
        LetterComponent,
        RecalledLettersComponent,
        SentenceDisplayComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }