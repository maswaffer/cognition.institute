import { Component, Input } from '@angular/core';
import { Sentence } from '../../services/sentence.service'

@Component({
    selector: 'sentence-display', 
    templateUrl: 'app/reading/sentence/sentenceDisplay.component.html'
})

export class SentenceDisplayComponent{
    @Input() sentence = new Sentence();

}