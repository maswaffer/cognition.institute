import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';

enum TestStage {
    start  = 1,
    instructions1 = 2,
    practiceLetters = 3,
    instructions2 = 4,
    practiceSentences = 5,
    instructions3 = 6,
    practiceCombined = 7,
    trial = 8,
    response = 9,
    score = 10,
    final = 11
}

type Step = () => void;
//This should be refactored to be TestManager
export class TrialKeeper {
    trialLengths: number[] = [2, 2, 3, 3, 4, 4, 5, 5];
    trials: Trial[];
    currentTrial: Trial;
    tf: TrialFactory = new TrialFactory();
    trial = 0;
    isPractice = true;
    practice = 0;

    stage = TestStage.start;

    trialLoaded: { (): void; };

    steps = new Array<Step>(2);
    step: 0;

    start(){
        //Push?????
        this.steps.push(() => this.showLetterInstructions());
        this.steps.push(() => this.startLetterPractice());
        this.nextStep();
    }

    nextStep(){
        let next = this.steps.shift();
        next();
    }

    showLetterInstructions(){
        this.stage = TestStage.instructions1;
    }

    startLetterPractice(){
        this.isPractice = true;
        this.stage = TestStage.practiceLetters;
        this.currentTrial.startLetterPractice();
    }

    loadTrials(sentenceService: SentenceService, lettersService: LettersService) {
        this.tf.finished = () => this.loadFirstTrial();
        this.tf.loadModels(sentenceService, lettersService, this.trialLengths);
    }

    loadFirstTrial() {
        this.trials = this.tf.trials;
        this.currentTrial = this.trials[0];
        this.currentTrial.completed = () => this.collectResponse();
        this.trialLoaded();
    }

    collectResponse() {
        this.stage = TestStage.response;
    }

    recordResponse(letters: string) {
        this.currentTrial.calculatePartialCreditUnitScore(letters);
        this.displayScore();
    }

    displayScore(){
        this.stage = TestStage.score;
        setTimeout(() => this.nextTrial(), 2000);
    }

    nextTrial() {
        this.currentTrial = this.trials[++this.trial];
        this.currentTrial.completed = () => this.collectResponse();
        if(this.isPractice && this.practice < 2){
            this.practice++;
            this.stage = TestStage.practiceLetters;
            this.currentTrial.startLetterPractice();
        }else{
            this.isPractice = false;
            this.stage = TestStage.trial;
        }
        this.trialLoaded();
    }
}


//Trial should move to reading model
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
    isLetterPractice: Boolean;

    round = 0;

    scores = {
        sentenceTotal: 0,
        sentenceCorrect: 0,
        lettersTotal: 0,
        lettersCorrect: 0,
        PCUS: 0
    }

    completed: { (): void; };

    populate(s: Sentence[], l: Letters) {
        this.sentences = s;
        this.letters = l;
        this.currentSentence = s[0];
        this.currentLetter = l.text.substring(0, 1);
        this.stage = TrialStage.sentence;
    }

    sentenceResponse(answer: boolean) {
        this.scores.sentenceTotal ++;
        if(this.currentSentence.response == answer){
            this.scores.sentenceCorrect ++;
        }
    }

    startLetterPractice(){
        this.isLetterPractice = true;
        this.stage = TrialStage.letter;
        this.next();
    }

    nextDelay(delay: number){
        setTimeout(()=>this.next(), delay);
    }

    next() {
        if (this.round >= this.letters.text.length) {
            this.completed();
        } else if(this.isLetterPractice){
            this.currentLetter = this.letters.text.substring(this.round, this.round + 1);
            this.round++;
            this.nextDelay(1000);
        }
        else {
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

    calculatePartialCreditUnitScore(entry: string){
        var entered = entry.split('');
        var score = 0;
        for(let l of entered){
            if(this.letters.text.includes(l)){
                this.scores.lettersCorrect++;
                score++;
            }
        }
        this.scores.lettersTotal = this.letters.text.length;
        this.scores.PCUS = score / this.letters.text.length;
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

//This needs to be a service 
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

    loadModels(sentenceService: SentenceService, lettersService: LettersService, trialLengths: number[]) {
        this.getSentences(sentenceService);
        this.getLetters(lettersService, trialLengths);
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

    private getLetters(lettersService: LettersService, trialLengths: number[]) {
        this.letters = lettersService.getLetters(trialLengths);
        this.lettersLoaded = true;
        this.createTrials();
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