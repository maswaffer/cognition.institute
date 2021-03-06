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
let LetterComponent = class LetterComponent {
    constructor() {
        this.displayLetter = 'loading...';
        this.selected = new core_1.EventEmitter();
    }
    select() {
        this.selected.emit(this.displayLetter);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LetterComponent.prototype, "displayLetter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LetterComponent.prototype, "selected", void 0);
LetterComponent = __decorate([
    core_1.Component({
        selector: 'letter',
        templateUrl: 'app/letterRecall/letter/letter.component.html',
        styleUrls: ['app/letterRecall/letter/letter.component.css']
    }),
    __metadata("design:paramtypes", [])
], LetterComponent);
exports.LetterComponent = LetterComponent;
//# sourceMappingURL=letter.component.js.map