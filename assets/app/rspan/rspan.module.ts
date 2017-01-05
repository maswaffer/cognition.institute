import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RspanComponent } from './rspan.component';
import { RspanRoutingModule, rspanRoutedComponents } from './rspan-routing.module';
import { LetterRecallComponent } from '../letterRecall/letterRecall.component';
import { LetterGridComponent } from '../letterRecall/letterGrid/letterGrid.component';
import { LetterComponent } from '../letterRecall/letter/letter.component';
import { RecalledLettersComponent } from '../letterRecall/recalledLetters/recalledLetters.component';
import { SentenceDisplayComponent } from '../reading/sentence/sentenceDisplay.component'
import { ReadingComponent } from '../reading/reading.component'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RspanRoutingModule
    ],
    declarations: [
        rspanRoutedComponents,
        LetterGridComponent,
        LetterComponent,
        RecalledLettersComponent,
        SentenceDisplayComponent,
        ReadingComponent
    ]
})
export class RspanModule { }