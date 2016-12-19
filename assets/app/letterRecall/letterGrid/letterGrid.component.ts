import { Component, EventEmitter, Output } from '@angular/core';
@Component({
        selector: 'letter-grid',
        templateUrl: 'app/letterRecall/letterGrid/letterGrid.component.html',
        styleUrls: ['app/letterRecall/letterGrid/letterGrid.component.css']
    }) 

export class LetterGridComponent{
    @Output() letterClicked = new EventEmitter<string>();

    letterSelected(event){
        this.letterClicked.emit({value: event.value});
    }
}