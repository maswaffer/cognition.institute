import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'letter-recall',
    templateUrl: 'app/letterRecall/letterRecall.component.html'
})

export class LetterRecall{
    @Output() response = new EventEmitter<string>();

    lettersRecalled = '';
    addLetter(letter: Object){
        this.lettersRecalled += letter as string;
    }

    clear(){
        this.lettersRecalled = '';
    }

    submit(){
        this.response.emit(this.lettersRecalled);
    }
}