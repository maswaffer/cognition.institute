"use strict";
const sentence_service_js_1 = require("../services/sentence.service.js");
class Trial {
    constructor(s, l) {
        this.s = s;
        this.l = l;
        this.currentSentence = new sentence_service_js_1.Sentence();
        this.sentences = s;
        this.letters = l;
        this.currentSentence = s[0];
        this.currentLetter = this.letters.text.substring(0, 1);
    }
}
class TrialFactory {
    createTrials(s, l) {
        let trials;
        let si = 0;
        for (let i in l) {
            let lettersLength = l[i].text.length;
            let theseSentences = s.slice(si, si + lettersLength);
            let t = new Trial(theseSentences, l[i]);
            trials.concat(t);
            si = si + lettersLength + 1;
        }
        return trials;
    }
}
//# sourceMappingURL=reading.model.js.map