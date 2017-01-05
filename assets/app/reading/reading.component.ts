import { Component, OnInit } from '@angular/core';
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

export class ReadingComponent implements OnInit{

    errorMessage: string;

    constructor(private sentenceService: SentenceService, private lettersService: LettersService, private tk: TrialKeeper) {}

    ngOnInit() {
        console.log('on init');
        this.tk.loadTrials(this.sentenceService, this.lettersService);
        console.log('done with init');
    }

    next() {
       this.tk.next();
    }

    answer(response: boolean){
        this.tk.next();
        this.delayForLetter();
    }

    delayForLetter(){
       setTimeout(() => this.tk.next(), 1000);
    }

   
}