import { Component } from '@angular/core';

@Component({
    selector: 'letter-recall',
    templateUrl: 'app/letterRecall/letterRecall.component.html'
})

export class LetterRecall{

    lettersRecalled = '';
    addLetter(event: Object){
        this.lettersRecalled += event.value;
    }
}