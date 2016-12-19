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
const app_component_1 = require("./app.component");
const letterRecall_component_1 = require("./letterRecall/letterRecall.component");
const letterGrid_component_1 = require("./letterRecall/letterGrid/letterGrid.component");
const letter_component_1 = require("./letterRecall/letter/letter.component");
const recalledLetters_component_1 = require("./letterRecall/recalledLetters/recalledLetters.component");
const reading_component_1 = require("./reading/reading.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent,
            letterGrid_component_1.LetterGridComponent,
            letter_component_1.LetterComponent,
            letterRecall_component_1.LetterRecall,
            recalledLetters_component_1.RecalledLettersComponent,
            reading_component_1.ReadingComponent],
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        bootstrap: [app_component_1.AppComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map