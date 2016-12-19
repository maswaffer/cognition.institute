import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'letter',
    templateUrl: 'app/letterRecall/letter/letter.component.html',
    styleUrls: ['app/letterRecall/letter/letter.component.css']
})

export class LetterComponent{
    @Input() displayLetter = 'loading...';
    @Output() selected = new EventEmitter<string>();

    select(){
        this.selected.emit({value: this.displayLetter});
    }
}