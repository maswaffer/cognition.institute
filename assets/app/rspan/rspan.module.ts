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
        RecalledLettersComponent
    ]
})
export class RspanModule { }