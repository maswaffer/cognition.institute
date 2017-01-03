import { Component, OnInit } from '@angular/core';
import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';
import { Trial, TrialFactory, TrialKeeper} from './reading.model.js';

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
    trial = 0;
    round = 0;

    constructor(private sentenceService: SentenceService, private lettersService: LettersService, private tk: TrialKeeper) {
     }

    // getSentences() {
    //     this.sentenceService.getSentences()
    //         .subscribe(
    //         sentences => { this.sentences = sentences; this.currentSentence = this.sentences[0] },
    //         error => this.errorMessage = <any>error
    //         );
    // }

    // getLetters(){
    //     this.lettersService.getLetters()
    //         .subscribe(
    //             letters => { 
    //                 console.log('letters' + letters);
    //                 this.letters = letters; 
    //                 this.currentLettersSet = letters[0]; 
    //                 this.currentLetter = letters[0].text.substring(0,1);
    //             },
    //             error => this.errorMessage = <any> error
    //         );
    // }

    ngOnInit() {
        console.log('on init');
        this.tk.loadTrials(this.sentenceService, this.lettersService);
        console.log('done with init');
    }

    next() {
        // var idx = this.sentences.map(function (x) { return x.id }).indexOf(this.currentSentence.id);
        // idx += 1;
        // if (idx < this.sentences.length) {
        //     this.currentSentence = this.sentences[idx];
        // }
    }

    // setCurrentLetter(){
    //     this.currentLetter = this.currentLettersSet[this.trial].text.substring(this.round, this.round+1);
    // }

    // setCurrentSentence(){
    //     this.currentSentence = this.sentences[this.round]
    // }
}