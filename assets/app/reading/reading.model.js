"use strict";
const sentence_service_js_1 = require("../services/sentence.service.js");
class TrialKeeper {
    constructor() {
        this.tf = new TrialFactory();
    }
    loadTrials(sentenceService, lettersService) {
        //let tf = new TrialFactory();
        this.tf.finished = () => this.loadCurrentTrial();
        this.tf.loadModels(sentenceService, lettersService);
        //this.trials = this.tf.trials;
    }
    loadCurrentTrial() {
        console.log('callback: loadCurrentTrial');
        this.trials = this.tf.trials;
        this.currentTrial = this.trials[0];
        console.log(this.currentTrial.letters.text);
    }
}
exports.TrialKeeper = TrialKeeper;
class Trial {
    constructor() {
        this.currentSentence = new sentence_service_js_1.Sentence();
    }
    populate(s, l) {
        this.sentences = s;
        this.letters = l;
        this.currentSentence = s[0];
        this.currentLetter = l.text.substring(0, 1);
    }
}
exports.Trial = Trial;
class TrialFactory {
    constructor() {
        this.sentences = [];
        this.letters = [];
        this.trials = [];
    }
    loadModels(sentenceService, lettersService) {
        this.getSentences(sentenceService);
        this.getLetters(lettersService);
    }
    getSentences(sentenceService) {
        sentenceService.getSentences()
            .subscribe(sentences => {
            this.sentences = sentences;
            this.sentencesLoaded = true;
            this.createTrials();
        }, error => this.errorMessage = error);
    }
    getLetters(lettersService) {
        lettersService.getLetters()
            .subscribe(letters => {
            this.letters = letters;
            this.lettersLoaded = true;
            this.createTrials();
        }, error => this.errorMessage = error);
    }
    createTrials() {
        if (this.sentencesLoaded && this.lettersLoaded) {
            this.trials = [];
            let si = 0;
            for (let i in this.letters) {
                let lettersLength = this.letters[i].text.length;
                let theseSentences = this.sentences.slice(si, si + lettersLength);
                let t = new Trial();
                t.populate(theseSentences, this.letters[i]);
                this.trials.push(t);
                si = si + lettersLength + 1;
            }
            console.log('done with trials' + this.trials.length);
            this.finished();
        }
    }
}
exports.TrialFactory = TrialFactory;
//# sourceMappingURL=reading.model.js.map