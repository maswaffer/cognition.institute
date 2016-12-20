import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';
import { AppComponent }   from './app.component';
import {LetterRecall} from './letterRecall/letterRecall.component';
import {LetterGridComponent} from './letterRecall/letterGrid/letterGrid.component';
import {LetterComponent} from './letterRecall/letter/letter.component';
import {RecalledLettersComponent} from './letterRecall/recalledLetters/recalledLetters.component';
import {ReadingComponent} from './reading/reading.component';
import {SentenceDisplayComponent} from './reading/sentence/sentenceDisplay.component'
 
@NgModule({
    declarations: [AppComponent, 
                    LetterGridComponent, 
                    LetterComponent,
                    LetterRecall,
                    RecalledLettersComponent,
                    ReadingComponent,
                    SentenceDisplayComponent],
    imports:      [BrowserModule, HttpModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}