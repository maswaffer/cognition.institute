import { Component, OnInit } from '@angular/core';
import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';

@Component({
    selector: 'reading-portion',
    templateUrl: 'app/reading/reading.component.html',
    providers: [
        SentenceService,
        LettersService
    ]
})

export class ReadingComponent implements OnInit{

    sentences: Sentence[];
    letters: Letters[];
    currentSentence = new Sentence();
    currentLettersSet: Letters;
    currentLetter: string;
    errorMessage: string;
    trial = 0;
    round = 0;

    constructor(private sentenceService: SentenceService, private lettersService: LettersService) { }

    getSentences() {
        this.sentenceService.getSentences()
            .subscribe(
            sentences => { this.sentences = sentences; this.currentSentence = this.sentences[0] },
            error => this.errorMessage = <any>error
            );
    }

    getLetters(){
        this.lettersService.getLetters()
            .subscribe(
                letters => { 
                    console.log('letters' + letters);
                    this.letters = letters; 
                    this.currentLettersSet = letters[0]; 
                    this.currentLetter = letters[0].text.substring(0,1);
                },
                error => this.errorMessage = <any> error
            );
    }

    ngOnInit() {
        this.getLetters();
        this.getSentences();
    }

    next() {
        var idx = this.sentences.map(function (x) { return x.id }).indexOf(this.currentSentence.id);
        idx += 1;
        if (idx < this.sentences.length) {
            this.currentSentence = this.sentences[idx];
        }
    }

    setCurrentLetter(){
        this.currentLetter = this.currentLettersSet[this.trial].text.substring(this.round, this.round+1);
    }

    setCurrentSentence(){
        this.currentSentence = this.sentences[this.round]
    }
}