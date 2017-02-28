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
let AnimationDisplayComponent = class AnimationDisplayComponent {
    ngOnChanges(...args) {
        this.fullFilename = "/c/a/" + this.fileName;
    }
    replay() {
        this.fullFilename = "/c/a/" + this.fileName + "?time=" + (new Date()).getTime();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AnimationDisplayComponent.prototype, "fileName", void 0);
AnimationDisplayComponent = __decorate([
    core_1.Component({
        selector: 'animation-display',
        templateUrl: 'app/content/animation/animation-display.component.html'
    }),
    __metadata("design:paramtypes", [])
], AnimationDisplayComponent);
exports.AnimationDisplayComponent = AnimationDisplayComponent;
//# sourceMappingURL=animation-display.component.js.map