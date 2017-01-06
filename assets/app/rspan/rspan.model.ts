import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';

enum TestStage {
    trial,
    response
}

export class TrialKeeper {
    trials: Trial[];
    currentTrial: Trial;
    tf: TrialFactory = new TrialFactory();
    trial = 0;

    stage = TestStage.trial;

    trialLoaded: { (): void; };

    loadTrials(sentenceService: SentenceService, lettersService: LettersService) {
        this.tf.finished = () => this.loadFirstTrial();
        this.tf.loadModels(sentenceService, lettersService);
    }

    loadFirstTrial() {
        this.trials = this.tf.trials;
        this.currentTrial = this.trials[0];
        this.currentTrial.completed = () => this.collectResponse();
        this.trialLoaded();
    }

    collectResponse(){
        this.stage = TestStage.response;
    }

    recordResponse(letters:string){
        this.nextTrial();
    }

    nextTrial(){
        this.currentTrial = this.trials[++this.trial];
        this.currentTrial.completed = () => this.collectResponse();
        this.stage = TestStage.trial;
        this.trialLoaded();
    }
}

enum TrialStage {
    sentence,
    response,
    letter
}

export class Trial {
    sentences: Sentence[];
    letters: Letters;
    currentSentence = new Sentence();
    currentLetter: string;
    stage: TrialStage;

    round = 0;

    completed: { (): void; };

    populate(s: Sentence[], l: Letters) {
        this.sentences = s;
        this.letters = l;
        this.currentSentence = s[0];
        this.currentLetter = l.text.substring(0, 1);
        this.stage = TrialStage.sentence;
    }

    next() {
        if (this.round >= this.letters.text.length) {
            this.completed();
        } else {
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
    }

    private rachet() {
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

export class TrialFactory {

    sentences: Sentence[];
    letters: Letters[];
    errorMessage: string;
    trials: Trial[];

    sentencesLoaded: boolean;
    lettersLoaded: boolean;

    finished: { (): void; };

    constructor() {
        this.sentences = [];
        this.letters = [];
        this.trials = [];
    }

    loadModels(sentenceService: SentenceService, lettersService: LettersService) {
        this.getSentences(sentenceService);
        this.getLetters(lettersService);
    }

    private getSentences(sentenceService: SentenceService) {
        sentenceService.getSentences()
            .subscribe(
            sentences => {
                this.sentences = sentences;
                this.sentencesLoaded = true;
                this.createTrials();
            },
            error => this.errorMessage = <any>error
            );
    }

    private getLetters(lettersService: LettersService) {
        lettersService.getLetters()
            .subscribe(
            letters => {
                this.letters = letters;
                this.lettersLoaded = true;
                this.createTrials();
            },
            error => this.errorMessage = <any>error
            );
    }

    private createTrials() {

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
            console.log('done with trials' + this.trials.length);
            this.finished();
        }
    }
}