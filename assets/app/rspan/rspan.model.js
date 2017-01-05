"use strict";
const sentence_service_js_1 = require("../services/sentence.service.js");
class TrialKeeper {
    constructor() {
        this.tf = new TrialFactory();
        this.trial = 0;
    }
    loadTrials(sentenceService, lettersService) {
        this.tf.finished = () => this.loadCurrentTrial();
        this.tf.loadModels(sentenceService, lettersService);
    }
    loadCurrentTrial() {
        console.log('callback: loadCurrentTrial');
        this.trials = this.tf.trials;
        this.currentTrial = this.trials[0];
        this.loaded();
        console.log(this.currentTrial.letters.text);
    }
    next() {
        this.currentTrial.next();
    }
}
exports.TrialKeeper = TrialKeeper;
var TrialStage;
(function (TrialStage) {
    TrialStage[TrialStage["sentence"] = 0] = "sentence";
    TrialStage[TrialStage["response"] = 1] = "response";
    TrialStage[TrialStage["letter"] = 2] = "letter";
})(TrialStage || (TrialStage = {}));
class Trial {
    constructor() {
        this.currentSentence = new sentence_service_js_1.Sentence();
        this.round = 0;
    }
    populate(s, l) {
        this.sentences = s;
        this.letters = l;
        this.currentSentence = s[0];
        this.currentLetter = l.text.substring(0, 1);
        this.stage = TrialStage.sentence;
    }
    next() {
        this.rachet();
        switch (this.stage) {
            case TrialStage.sentence:
                this.currentSentence = this.sentences[this.round];
                break;
            case TrialStage.response:
                break;
            case TrialStage.letter:
                this.currentLetter = this.letters.text.substring(this.round, this.round + 1);
                this.round++;
                break;
        }
    }
    rachet() {
        switch (this.stage) {
            case TrialStage.sentence:
                this.stage = TrialStage.response;
                break;
            case TrialStage.response:
                this.stage = TrialStage.letter;
                break;
            case TrialStage.letter:
                this.stage = TrialStage.sentence;
                break;
        }
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
//# sourceMappingURL=rspan.model.js.map