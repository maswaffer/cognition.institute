import { Component, OnInit } from '@angular/core';
import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';
import { Trial, TrialFactory, TrialKeeper} from './rspan.model.js';

@Component({
    selector: 'rspan',
    templateUrl: 'app/rspan/rspan.component.html',
    providers: [
        SentenceService,
        LettersService, 
        Trial,
        TrialFactory,
        TrialKeeper
    ]
})

export class RspanComponent implements OnInit{
    
    currentTrial = new Trial();

    constructor(private sentenceService: SentenceService, private lettersService: LettersService, private tk: TrialKeeper) {}

    ngOnInit() {
        console.log('on init updated');
        this.tk.trialLoaded = () => this.setTrial();
        this.tk.loadTrials(this.sentenceService, this.lettersService);
        console.log('done with init: stage=' + this.tk.stage);
    }

    setTrial(){
        this.currentTrial = this.tk.currentTrial;
    }

    recalledLetters(letters: string){
        this.tk.recordResponse(letters);
    }

    start(){
        this.tk.start();
    }

    next(){
        this.tk.nextStep();
    }


}
