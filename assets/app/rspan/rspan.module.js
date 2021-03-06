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
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const rspan_routing_module_1 = require("./rspan-routing.module");
const letterGrid_component_1 = require("../letterRecall/letterGrid/letterGrid.component");
const letter_component_1 = require("../letterRecall/letter/letter.component");
const recalledLetters_component_1 = require("../letterRecall/recalledLetters/recalledLetters.component");
const sentenceDisplay_component_1 = require("../reading/sentence/sentenceDisplay.component");
const reading_component_1 = require("../reading/reading.component");
let RspanModule = class RspanModule {
};
RspanModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            rspan_routing_module_1.RspanRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            rspan_routing_module_1.rspanRoutedComponents,
            letterGrid_component_1.LetterGridComponent,
            letter_component_1.LetterComponent,
            recalledLetters_component_1.RecalledLettersComponent,
            sentenceDisplay_component_1.SentenceDisplayComponent,
            reading_component_1.ReadingComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], RspanModule);
exports.RspanModule = RspanModule;
//# sourceMappingURL=rspan.module.js.map