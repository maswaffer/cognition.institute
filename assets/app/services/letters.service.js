"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
class Letters {
}
exports.Letters = Letters;
let LettersService = class LettersService {
    constructor() {
        this.theLetters = ["F", "H", "J", "K", "L", "N", "P", "Q", "R", "S", "T", "Y"];
    }
    getLetters(numLetters) {
        let ls = [];
        var shuffledNumbers = this.shuffleArray(numLetters);
        for (var i = 0; i < numLetters.length; i++) {
            var shuffled = this.shuffleArray(this.theLetters);
            var chars = shuffledNumbers[i];
            var theseLetters = shuffled.slice(0, chars);
            var l = new Letters();
            l.text = theseLetters.join('');
            ls.push(l);
        }
        return ls;
    }
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
};
LettersService = __decorate([
    core_1.Injectable()
], LettersService);
exports.LettersService = LettersService;
//# sourceMappingURL=letters.service.js.map