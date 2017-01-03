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
const app_model_js_1 = require("../app.model.js");
let RspanComponent = class RspanComponent {
    ngOnInit() {
    }
};
RspanComponent = __decorate([
    core_1.Component({
        selector: 'reading-portion',
        templateUrl: 'app/rspan/rspan.component.html',
        providers: [
            sentence_service_js_1.SentenceService,
            letters_service_js_1.LettersService,
            app_model_js_1.Trial,
            app_model_js_1.TrialFactory,
            app_model_js_1.TrialKeeper
        ]
    }),
    __metadata("design:paramtypes", [])
], RspanComponent);
exports.RspanComponent = RspanComponent;
//# sourceMappingURL=rspan.component.js.map