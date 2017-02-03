import { Component, OnInit } from '@angular/core';
import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';
import { Trial, TrialFactory, TrialKeeper} from './rspan.model.js';
import { ScoreService } from '../services/score.service.js'

@Component({
    selector: 'rspan',
    templateUrl: 'app/rspan/rspan.component.html',
    providers: [
        SentenceService,
        LettersService, 
        ScoreService,
        Trial,
        TrialFactory,
        TrialKeeper
    ]
})

export class RspanComponent implements OnInit{
    
    currentTrial = new Trial();

    constructor(private sentenceService: SentenceService, 
                private lettersService: LettersService, 
                private tk: TrialKeeper,
                private scoreService: ScoreService) {}

    ngOnInit() {
        this.tk.trialLoaded = () => this.setTrial();
        this.tk.loadTrials(this.sentenceService, this.lettersService);
        this.tk.scoreService = this.scoreService;
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
