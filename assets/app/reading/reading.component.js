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
const reading_model_js_1 = require("./reading.model.js");
let ReadingComponent = class ReadingComponent {
    constructor(sentenceService, lettersService, tk) {
        this.sentenceService = sentenceService;
        this.lettersService = lettersService;
        this.tk = tk;
    }
    ngOnInit() {
        console.log('on init');
        this.tk.loadTrials(this.sentenceService, this.lettersService);
        console.log('done with init');
    }
    next() {
        this.tk.next();
    }
    answer(response) {
        this.tk.next();
        this.delayForLetter();
    }
    delayForLetter() {
        setTimeout(() => this.tk.next(), 1000);
    }
};
ReadingComponent = __decorate([
    core_1.Component({
        selector: 'reading-portion',
        templateUrl: 'app/reading/reading.component.html',
        providers: [
            sentence_service_js_1.SentenceService,
            letters_service_js_1.LettersService,
            reading_model_js_1.Trial,
            reading_model_js_1.TrialFactory,
            reading_model_js_1.TrialKeeper
        ]
    }),
    __metadata("design:paramtypes", [sentence_service_js_1.SentenceService, letters_service_js_1.LettersService, reading_model_js_1.TrialKeeper])
], ReadingComponent);
exports.ReadingComponent = ReadingComponent;
//# sourceMappingURL=reading.component.js.map