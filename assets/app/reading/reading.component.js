"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const sentence_service_js_1 = require("../services/sentence.service.js");
const letters_service_js_1 = require("../services/letters.service.js");
let ReadingComponent = class ReadingComponent {
    constructor(sentenceService, lettersService) {
        this.sentenceService = sentenceService;
        this.lettersService = lettersService;
        this.currentSentence = new sentence_service_js_1.Sentence();
        this.trial = 0;
        this.round = 0;
    }
    getSentences() {
        this.sentenceService.getSentences()
            .subscribe(sentences => { this.sentences = sentences; this.currentSentence = this.sentences[0]; }, error => this.errorMessage = error);
    }
    getLetters() {
        this.lettersService.getLetters()
            .subscribe(letters => {
            console.log('letters' + letters);
            this.letters = letters;
            this.currentLettersSet = letters[0];
            this.currentLetter = letters[0].text.substring(0, 1);
        }, error => this.errorMessage = error);
    }
    ngOnInit() {
        this.getLetters();
        this.getSentences();
    }
    next() {
        var idx = this.sentences.map(function (x) { return x.id; }).indexOf(this.currentSentence.id);
        idx += 1;
        if (idx < this.sentences.length) {
            this.currentSentence = this.sentences[idx];
        }
    }
    setCurrentLetter() {
        this.currentLetter = this.currentLettersSet[this.trial].text.substring(this.round, this.round + 1);
    }
    setCurrentSentence() {
        this.currentSentence = this.sentences[this.round];
    }
};
ReadingComponent = __decorate([
    core_1.Component({
        selector: 'reading-portion',
        templateUrl: 'app/reading/reading.component.html',
        providers: [
            sentence_service_js_1.SentenceService,
            letters_service_js_1.LettersService
        ]
    }),
    __metadata("design:paramtypes", [sentence_service_js_1.SentenceService, letters_service_js_1.LettersService])
], ReadingComponent);
exports.ReadingComponent = ReadingComponent;
//# sourceMappingURL=reading.component.js.map