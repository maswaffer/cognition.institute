import {Component} from '@angular/core';
import {Sentence, SentenceService} from '../services/sentence.service.js';

@Component({
    selector: 'reading-portion',
    templateUrl: 'app/reading/reading.component.html',
    providers: [SentenceService]
})

export class ReadingComponent{
    sentences: Sentence[];
    errorMessage: string;

    constructor(private sentenceService: SentenceService){}

    getSentences(){
        this.sentenceService.getSentences()
            .subscribe(
                sentences => this.sentences = sentences,
                error => this.errorMessage = <any>error
            );
    }

    ngOnInit() {
        this.getSentences();
    }
}