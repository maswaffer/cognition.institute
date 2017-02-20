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
const text_service_1 = require("../../services/text.service");
let TextDisplayComponent = class TextDisplayComponent {
    constructor(textService) {
        this.textService = textService;
    }
    ngOnChanges(changes) {
        this.loadFile();
    }
    loadFile() {
        this.textService.getText(this.fileName)
            .subscribe(text => {
            this.formatText(text);
        }, error => this.errorMessage = error);
    }
    formatText(text) {
        this.text = text.split('\n');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TextDisplayComponent.prototype, "fileName", void 0);
TextDisplayComponent = __decorate([
    core_1.Component({
        selector: 'text-display',
        templateUrl: 'app/content/text/text-display.component.html',
        providers: [
            text_service_1.TextService
        ]
    }),
    __metadata("design:paramtypes", [text_service_1.TextService])
], TextDisplayComponent);
exports.TextDisplayComponent = TextDisplayComponent;
//# sourceMappingURL=text-display.component.js.map