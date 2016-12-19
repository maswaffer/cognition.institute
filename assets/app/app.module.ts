import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {LetterRecall} from './letterRecall/letterRecall.component';
import {LetterGridComponent} from './letterRecall/letterGrid/letterGrid.component';
import {LetterComponent} from './letterRecall/letter/letter.component';
import {RecalledLettersComponent} from './letterRecall/recalledLetters/recalledLetters.component';
 
@NgModule({
    declarations: [AppComponent, 
                    LetterGridComponent, 
                    LetterComponent,
                    LetterRecall,
                    RecalledLettersComponent],
    imports:      [BrowserModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}