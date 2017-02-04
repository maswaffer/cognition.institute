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
const rspan_model_js_1 = require("../rspan/rspan.model.js");
let ReadingComponent = class ReadingComponent {
    constructor() {
        this.currentTrial = new rspan_model_js_1.Trial();
    }
    next() {
        this.currentTrial.next();
    }
    answer(response) {
        this.currentTrial.sentenceResponse(response);
        this.currentTrial.next();
        this.delayForLetter();
    }
    delayForLetter() {
        this.currentTrial.nextLetterDelay();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ReadingComponent.prototype, "currentTrial", void 0);
ReadingComponent = __decorate([
    core_1.Component({
        selector: 'reading-portion',
        templateUrl: 'app/reading/reading.component.html',
        providers: [
            sentence_service_js_1.SentenceService,
            letters_service_js_1.LettersService,
            rspan_model_js_1.Trial,
            rspan_model_js_1.TrialFactory,
            rspan_model_js_1.TrialKeeper
        ]
    }),
    __metadata("design:paramtypes", [])
], ReadingComponent);
exports.ReadingComponent = ReadingComponent;
//# sourceMappingURL=reading.component.js.map