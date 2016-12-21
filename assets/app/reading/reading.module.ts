import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReadingComponent } from './reading.component';
import { SentenceDisplayComponent } from './sentence/sentenceDisplay.component'
import { ReadingRoutingModule, readingRoutedComponents } from './reading-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReadingRoutingModule
    ],
    declarations: [
        readingRoutedComponents,
        SentenceDisplayComponent
    ]
})
export class ReadingModule { }