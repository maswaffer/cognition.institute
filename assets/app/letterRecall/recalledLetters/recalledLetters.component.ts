import { Component, Input } from '@angular/core';

@Component({
    selector: 'recalled-letters',
    templateUrl: 'app/letterRecall/recalledLetters/recalledLetters.component.html',
    styleUrls: ['app/letterRecall/recalledLetters/recalledLetters.component.css']
})

export class RecalledLettersComponent{
    @Input() letterList = 'ABC';
}