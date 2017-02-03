import { Component, Input } from '@angular/core';
import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';
import { Trial, TrialFactory, TrialKeeper} from '../rspan/rspan.model.js';

@Component({
    selector: 'reading-portion',
    templateUrl: 'app/reading/reading.component.html',
    providers: [
        SentenceService,
        LettersService, 
        Trial,
        TrialFactory,
        TrialKeeper
    ]
})

export class ReadingComponent {
    @Input() currentTrial = new Trial();
    errorMessage: string;

    next() {
       this.currentTrial.next();
    }

    answer(response: boolean){
        this.currentTrial.sentenceResponse(response);
        this.currentTrial.next();
        this.delayForLetter();
    }

    delayForLetter(){
       this.currentTrial.nextLetterDelay(1000);
    }

   
}