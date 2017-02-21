"use strict";
const sentence_service_js_1 = require("../services/sentence.service.js");
var TestStage;
(function (TestStage) {
    TestStage[TestStage["start"] = 1] = "start";
    TestStage[TestStage["instructions1"] = 2] = "instructions1";
    TestStage[TestStage["practiceLetters"] = 3] = "practiceLetters";
    TestStage[TestStage["instructions2"] = 4] = "instructions2";
    TestStage[TestStage["practiceSentences"] = 5] = "practiceSentences";
    TestStage[TestStage["instructions3"] = 6] = "instructions3";
    TestStage[TestStage["practiceCombined"] = 7] = "practiceCombined";
    TestStage[TestStage["instructions4"] = 8] = "instructions4";
    TestStage[TestStage["trial"] = 9] = "trial";
    TestStage[TestStage["response"] = 10] = "response";
    TestStage[TestStage["score"] = 11] = "score";
    TestStage[TestStage["final"] = 12] = "final";
})(TestStage || (TestStage = {}));
//This should be refactored to be TestManager
class TrialKeeper {
    constructor() {
        this.letterPracticeRounds = [2, 3];
        this.sentencePracticeRounds = [2, 3];
        this.trialRounds = [2, 3, 2, 3, 4, 5, 4, 5, 6, 7, 6, 7];
        this.tf = new TrialFactory();
        this.trial = 0;
        this.stage = TestStage.start;
        this.steps = new Array();
        this.practiceSentenceTimes = new Array();
        this.totalscores = {
            participantId: '',
            sentenceTotal: 0,
            sentenceCorrect: 0,
            sentenceProportion: 0,
            lettersTotal: 0,
            lettersCorrect: 0,
            partial: 0,
            PCUS: 0,
            trials: 0,
            sentenceDuration: 0
        };
    }
    //practiceRounds = 2;
    //trialRounds = 10;
    start() {
        //Letter practice
        this.steps.push(() => this.showLetterInstructions());
        for (var i = 0; i < this.letterPracticeRounds.length; i++) {
            this.steps.push(() => this.startLetterPractice());
            this.steps.push(() => this.collectResponse());
        }
        //Sentence practice
        this.steps.push(() => this.showSentenceInstructions());
        for (var i = 0; i < this.sentencePracticeRounds.length; i++) {
            this.steps.push(() => this.startSentencePractice());
            this.steps.push(() => this.displayScore());
        }
        //Combined practice
        this.steps.push(() => this.showCombinedInstructions());
        for (var i = 0; i < this.sentencePracticeRounds.length; i++) {
            this.steps.push(() => this.startCombinedPractice());
            this.steps.push(() => this.collectResponse());
        }
        //Trials
        this.steps.push(() => this.showTrialInstructions());
        for (var i = 0; i < this.trialRounds.length; i++) {
            this.steps.push(() => this.startTrial());
            this.steps.push(() => this.collectResponse());
        }
        this.steps.push(() => this.showFinalScreen());
        //Kick things off
        this.nextStep();
    }
    nextStep() {
        let next = this.steps.shift();
        next();
    }
    showLetterInstructions() {
        this.stage = TestStage.instructions1;
    }
    startLetterPractice() {
        this.stage = TestStage.practiceLetters;
        this.currentTrial.startLetterPractice();
    }
    showSentenceInstructions() {
        this.stage = TestStage.instructions2;
    }
    startSentencePractice() {
        this.stage = TestStage.practiceSentences;
        this.currentTrial.startSentencePractice();
    }
    showCombinedInstructions() {
        this.stage = TestStage.instructions3;
    }
    startCombinedPractice() {
        this.stage = TestStage.practiceCombined;
        this.currentTrial.startCombinedPractice();
    }
    collectResponse() {
        this.stage = TestStage.response;
    }
    displayScore() {
        if (this.currentTrial.isPractice()) {
            this.practiceSentenceTimes = this.practiceSentenceTimes.concat(this.currentTrial.practiceSentenceTimes);
        }
        this.stage = TestStage.score;
        setTimeout(() => this.loadNextTrial(), 2000);
    }
    showTrialInstructions() {
        this.stage = TestStage.instructions4;
    }
    startTrial() {
        var meanSentenceTime = ss.mean(this.practiceSentenceTimes);
        var meanSD = ss.standardDeviation(this.practiceSentenceTimes);
        this.totalscores.sentenceDuration = meanSentenceTime + (2 * meanSD);
        this.currentTrial.sentenceDuration = this.totalscores.sentenceDuration;
        this.stage = TestStage.trial;
        this.currentTrial.startTrial();
    }
    showFinalScreen() {
        this.saveScores();
        this.stage = TestStage.final;
    }
    //Init functions
    loadTrials(sentenceService, lettersService) {
        // Add letters and plain sentence practice
        this.trialLengths = this.letterPracticeRounds.concat(this.sentencePracticeRounds);
        // Add combined sentence
        this.trialLengths = this.trialLengths.concat(this.sentencePracticeRounds);
        // Add Trials
        this.trialLengths = this.trialLengths.concat(this.trialRounds);
        console.log('total trials: ' + this.trialLengths.length);
        this.tf.finished = () => this.loadFirstTrial();
        this.tf.loadModels(sentenceService, lettersService, this.trialLengths);
    }
    loadFirstTrial() {
        this.trials = this.tf.trials;
        this.currentTrial = this.trials[0];
        this.currentTrial.completed = () => this.nextStep();
        this.trialLoaded();
    }
    recordResponse(letters) {
        this.currentTrial.calculatePartialCreditScore(letters);
        if (!this.currentTrial.isPractice()) {
            this.recordTrialScore();
        }
        this.displayScore();
    }
    saveScores() {
        this.scoreService.saveSentences(this.totalscores)
            .subscribe(response => { }, error => console.log(error));
        ;
    }
    recordTrialScore() {
        this.totalscores.trials++;
        this.totalscores.sentenceTotal += this.currentTrial.scores.sentenceTotal;
        this.totalscores.sentenceCorrect += this.currentTrial.scores.sentenceCorrect;
        this.totalscores.lettersCorrect += this.currentTrial.scores.lettersCorrect;
        this.totalscores.lettersTotal += this.currentTrial.scores.lettersTotal;
        this.totalscores.partial += this.currentTrial.scores.proportion;
        //Calculations
        this.totalscores.PCUS = this.totalscores.partial / this.totalscores.trials;
        this.totalscores.sentenceProportion = this.totalscores.sentenceCorrect / this.totalscores.sentenceTotal;
    }
    loadNextTrial() {
        if (this.trial + 1 < this.trials.length) {
            this.currentTrial = this.trials[++this.trial];
            console.log('loading Round 1 of trial # ' + (this.trial + 1));
            this.currentTrial.completed = () => this.nextStep();
            this.currentTrial.sentenceDuration = this.totalscores.sentenceDuration;
            this.trialLoaded();
        }
        else {
            console.log('No more trials to load');
        }
        this.nextStep();
    }
}
exports.TrialKeeper = TrialKeeper;
//Trial should move to reading model
var TrialStage;
(function (TrialStage) {
    TrialStage[TrialStage["sentence"] = 0] = "sentence";
    TrialStage[TrialStage["response"] = 1] = "response";
    TrialStage[TrialStage["letter"] = 2] = "letter";
})(TrialStage || (TrialStage = {}));
class Trial {
    constructor() {
        this.currentSentence = new sentence_service_js_1.Sentence();
        this.practiceSentenceTimes = new Array();
        this.letterDelay = 1250;
        this.round = 0;
        this.scores = {
            sentenceTotal: 0,
            sentenceCorrect: 0,
            lettersTotal: 0,
            lettersCorrect: 0,
            proportion: 0
        };
    }
    populate(s, l) {
        this.sentences = s;
        this.letters = l;
        this.currentSentence = s[0];
        this.currentLetter = l.text.substring(0, 1);
        this.stage = TrialStage.sentence;
    }
    sentenceResponse(answer) {
        clearTimeout(this.sentenceDurationTimer);
        this.scores.sentenceTotal++;
        if (this.currentSentence.response == answer) {
            this.scores.sentenceCorrect++;
        }
        this.next();
    }
    startLetterPractice() {
        this.isLetterPractice = true;
        this.stage = TrialStage.letter;
        this.next();
    }
    startSentencePractice() {
        this.isLetterPractice = false;
        this.isSentencePractice = true;
        this.startSentenceTime = Date.now();
    }
    startCombinedPractice() {
        this.isLetterPractice = false;
        this.isSentencePractice = false;
        this.isCombinedPractice = true;
        this.startSentenceTime = Date.now();
    }
    startTrial() {
        setTimeout(() => this.timerSkip(), this.sentenceDuration);
    }
    nextLetterDelay() {
        if (!this.isSentencePractice) {
            setTimeout(() => this.next(), this.letterDelay);
        }
    }
    timerSkip() {
        //Double check the stage...make sure the user didn't click in that xMS long window
        if (this.stage == TrialStage.sentence) {
            this.scores.sentenceTotal++; //Don't give credit for skipped sentences
            this.stage = TrialStage.letter; //Skip response stage
            this.currentLetter = this.letters.text.substring(this.round, this.round + 1);
            this.round++;
            this.nextLetterDelay(); //Go straight to letter
        }
    }
    next() {
        clearTimeout(this.sentenceDurationTimer);
        if (this.round >= this.letters.text.length) {
            this.completed();
        }
        else if (this.isLetterPractice) {
            this.currentLetter = this.letters.text.substring(this.round, this.round + 1);
            this.round++;
            this.nextLetterDelay();
        }
        else {
            this.rachet();
            switch (this.stage) {
                case TrialStage.sentence:
                    console.log('Round: ' + (this.round + 1));
                    this.currentSentence = this.sentences[this.round];
                    if (!this.isPractice()) {
                        this.sentenceDurationTimer = setTimeout(() => this.timerSkip(), this.sentenceDuration);
                    }
                    break;
                case TrialStage.response:
                    //TODO: fix this...this is ugly -- hack to skip letter
                    if (this.isSentencePractice) {
                        this.round++;
                    }
                    break;
                case TrialStage.letter:
                    this.currentLetter = this.letters.text.substring(this.round, this.round + 1);
                    this.round++;
                    this.nextLetterDelay();
                    break;
            }
        }
    }
    calculatePartialCreditScore(entry) {
        var entered = entry.split('');
        var score = 0;
        var p = 0;
        for (let l of entered) {
            if (p < this.letters.text.length && l == this.letters.text[p]) {
                this.scores.lettersCorrect++;
                score++;
            }
            p++;
        }
        this.scores.lettersTotal = this.letters.text.length;
        this.scores.proportion = score / this.letters.text.length;
    }
    isPractice() {
        var isPractice = false;
        if (this.isLetterPractice) {
            isPractice = true;
        }
        if (this.isSentencePractice) {
            isPractice = true;
        }
        if (this.isCombinedPractice) {
            isPractice = true;
        }
        return isPractice;
    }
    rachet() {
        switch (this.stage) {
            case TrialStage.sentence:
                this.practiceSentenceTimes.push(Date.now() - this.startSentenceTime);
                this.stage = TrialStage.response;
                break;
            case TrialStage.response:
                if (this.isSentencePractice) {
                    this.startSentenceTime = Date.now();
                    this.stage = TrialStage.sentence;
                }
                else {
                    this.stage = TrialStage.letter;
                }
                break;
            case TrialStage.letter:
                this.startSentenceTime = Date.now();
                this.stage = TrialStage.sentence;
                break;
        }
    }
}
exports.Trial = Trial;
//This needs to be a service 
class TrialFactory {
    constructor() {
        this.sentences = [];
        this.letters = [];
        this.trials = [];
    }
    loadModels(sentenceService, lettersService, trialLengths) {
        this.getSentences(sentenceService);
        this.getLetters(lettersService, trialLengths);
    }
    getSentences(sentenceService) {
        sentenceService.getSentences()
            .subscribe(sentences => {
            this.sentences = sentences;
            this.sentencesLoaded = true;
            this.createTrials();
        }, error => this.errorMessage = error);
    }
    getLetters(lettersService, trialLengths) {
        this.letters = lettersService.getLetters(trialLengths);
        this.lettersLoaded = true;
        this.createTrials();
    }
    createTrials() {
        if (this.sentencesLoaded && this.lettersLoaded) {
            this.trials = [];
            let si = 0;
            for (let i in this.letters) {
                let l = this.letters[i];
                let theseSentences = this.sentences.slice(si, si + l.text.length);
                let t = new Trial();
                t.populate(theseSentences, l);
                this.trials.push(t);
                si = si + l.text.length;
            }
            this.finished();
        }
    }
}
exports.TrialFactory = TrialFactory;
//# sourceMappingURL=rspan.model.js.map