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
const rspan_model_js_1 = require("./rspan.model.js");
const score_service_js_1 = require("../services/score.service.js");
let RspanComponent = class RspanComponent {
    constructor(sentenceService, lettersService, tk, scoreService) {
        this.sentenceService = sentenceService;
        this.lettersService = lettersService;
        this.tk = tk;
        this.scoreService = scoreService;
        this.currentTrial = new rspan_model_js_1.Trial();
        this.showParticipantError = false;
    }
    ngOnInit() {
        this.tk.trialLoaded = () => this.setTrial();
        this.tk.loadTrials(this.sentenceService, this.lettersService);
        this.tk.scoreService = this.scoreService;
    }
    setTrial() {
        this.currentTrial = this.tk.currentTrial;
    }
    recalledLetters(letters) {
        this.tk.recordResponse(letters);
    }
    start() {
        this.showParticipantError = false;
        if (this.tk.totalscores.participantId != '') {
            this.tk.start();
        }
        else {
            this.showParticipantError = true;
        }
    }
    next() {
        this.tk.nextStep();
    }
};
RspanComponent = __decorate([
    core_1.Component({
        selector: 'rspan',
        templateUrl: 'app/rspan/rspan.component.html',
        providers: [
            sentence_service_js_1.SentenceService,
            letters_service_js_1.LettersService,
            score_service_js_1.ScoreService,
            rspan_model_js_1.Trial,
            rspan_model_js_1.TrialFactory,
            rspan_model_js_1.TrialKeeper
        ]
    }),
    __metadata("design:paramtypes", [sentence_service_js_1.SentenceService,
        letters_service_js_1.LettersService,
        rspan_model_js_1.TrialKeeper,
        score_service_js_1.ScoreService])
], RspanComponent);
exports.RspanComponent = RspanComponent;
//# sourceMappingURL=rspan.component.js.map