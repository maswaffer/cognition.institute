import { Component } from '@angular/core';
import { Sentence, SentenceService } from '../services/sentence.service.js';

@Component({
    selector: 'reading-portion',
    templateUrl: 'app/reading/reading.component.html',
    providers: [SentenceService]
})

export class ReadingComponent {

    sentences: Sentence[];
    currentSentence = new Sentence();
    errorMessage: string;

    constructor(private sentenceService: SentenceService) { }

    getSentences() {
        this.sentenceService.getSentences()
            .subscribe(
            sentences => { this.sentences = sentences; this.currentSentence = this.sentences[0] },
            error => this.errorMessage = <any>error
            );
    }

    ngOnInit() {
        this.getSentences();
    }

    next() {
        var idx = this.sentences.map(function (x) { return x.id }).indexOf(this.currentSentence.id);
        idx += 1;
        if (idx < this.sentences.length) {
            this.currentSentence = this.sentences[idx];
        }
    }
}