import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';
import { ScoreService } from '../services/score.service.js'

enum TestStage {
    start  = 1,
    instructions1 = 2,
    practiceLetters = 3,
    instructions2 = 4,
    practiceSentences = 5,
    instructions3 = 6,
    practiceCombined = 7,
    instructions4 = 8,
    trial = 9,
    response = 10,
    score = 11,
    final = 12
}

type Step = () => void;
//This should be refactored to be TestManager
export class TrialKeeper {
    trialLengths: number[] = [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
    trials: Trial[];
    currentTrial: Trial;
    tf: TrialFactory = new TrialFactory();
    trial = 0;
    stage = TestStage.start;
    trialLoaded: { (): void; };
    steps = new Array<Step>();
    scoreService: ScoreService;
    practiceSentenceTimes = new Array<number>();

    totalscores = {
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
    }

    practiceRounds = 1;
    trialRounds = 2;

    start(){
        //Letter practice
        this.steps.push(() => this.showLetterInstructions());
        for(var i=0; i<this.practiceRounds;i++){
            this.steps.push(() => this.startLetterPractice());
            this.steps.push(() => this.collectResponse());
        }

        //Sentence practice
        this.steps.push(() => this.showSentenceInstructions());
        this.steps.push(() => this.startSentencePractice());
        this.steps.push(() => this.displayScore());

        //Combined practice
        this.steps.push(() => this.showCombinedInstructions());
        for(var i=0; i<this.practiceRounds;i++){
            this.steps.push(() => this.startCombinedPractice());
            this.steps.push(() => this.collectResponse());
        }

        //Trials
        this.steps.push(() => this.showTrialInstructions()); 
        for(var i=0; i<this.trialRounds;i++){
            this.steps.push(() => this.startTrial());
            this.steps.push(() => this.collectResponse());
        }

        this.steps.push(() => this.showFinalScreen());

        //Kick things off
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
        this.stage = TestStage.practiceLetters;
        this.currentTrial.startLetterPractice();
    }

    showSentenceInstructions(){
        this.stage = TestStage.instructions2;
    }

    startSentencePractice(){
        this.stage = TestStage.practiceSentences;
        this.currentTrial.startSentencePractice();
    }

    showCombinedInstructions(){
        this.stage = TestStage.instructions3;
    }

    startCombinedPractice(){
        this.stage = TestStage.practiceCombined;
        this.currentTrial.startCombinedPractice();
    }

    collectResponse() {
        this.stage = TestStage.response;
    }

    displayScore(){
        if(this.currentTrial.isPractice()){
            this.practiceSentenceTimes = this.practiceSentenceTimes.concat(this.currentTrial.practiceSentenceTimes);
        }
        this.stage = TestStage.score;
        setTimeout(() => this.loadNextTrial(), 2000);
    }

    showTrialInstructions(){
        this.stage = TestStage.instructions4;
    }

    startTrial(){
        var meanSentenceTime = ss.mean(this.practiceSentenceTimes);
        var meanSD = ss.standardDeviation(this.practiceSentenceTimes);
        this.totalscores.sentenceDuration = meanSentenceTime + (2 * meanSD);
        this.currentTrial.sentenceDuration = this.totalscores.sentenceDuration;
        this.stage = TestStage.trial;
        this.currentTrial.startTrial();
    }

    showFinalScreen(){
        this.saveScores();
        this.stage = TestStage.final;
    }

    //Init functions
    loadTrials(sentenceService: SentenceService, lettersService: LettersService) {
        this.tf.finished = () => this.loadFirstTrial();
        this.tf.loadModels(sentenceService, lettersService, this.trialLengths);
    }

    loadFirstTrial() {
        this.trials = this.tf.trials;
        this.currentTrial = this.trials[0];
        this.currentTrial.completed = () => this.nextStep();
        this.trialLoaded();
    }

    recordResponse(letters: string) {
        this.currentTrial.calculatePartialCreditScore(letters);
        if(!this.currentTrial.isPractice()){
            this.recordTrialScore();
        }
        this.displayScore();
    }

    saveScores(){
        this.scoreService.saveSentences(this.totalscores)
            .subscribe(
                response => {                },
                error => console.log(<any>error)
            );;
    }

    recordTrialScore(){
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
        this.currentTrial = this.trials[++this.trial];
        this.currentTrial.completed = () => this.nextStep();
        this.currentTrial.sentenceDuration = this.totalscores.sentenceDuration;
        this.trialLoaded();
        this.nextStep();
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
    isSentencePractice: Boolean;
    isCombinedPractice: Boolean;
    practiceSentenceTimes = new Array<number>();
    sentenceDuration: number;
    private startSentenceTime: number;
    private letterDelay = 1000;

    round = 0;

    scores = {
        sentenceTotal: 0,
        sentenceCorrect: 0,
        lettersTotal: 0,
        lettersCorrect: 0,
        proportion: 0
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

    startSentencePractice(){
        this.isLetterPractice = false;
        this.isSentencePractice = true;
        this.startSentenceTime = Date.now();
    }

    startCombinedPractice(){
        this.isLetterPractice = false;
        this.isSentencePractice = false;
        this.isCombinedPractice = true;
        this.startSentenceTime = Date.now();        
    }

    startTrial(){
        setTimeout(()=>this.timerSkip(), this.sentenceDuration);
    }

    nextLetterDelay(){
        if(!this.isSentencePractice){
            setTimeout(()=>this.next(), this.letterDelay);
        }
    }

    timerSkip(){
        this.scores.sentenceTotal++;        //Don't give credit for skipped sentences
        this.stage = TrialStage.letter;   //Skip response stage
        this.currentLetter = this.letters.text.substring(this.round, this.round + 1);
        this.round++;
        this.nextLetterDelay();             //Go straight to letter
    }

    private sentenceDurationTimer : number;

    next() {
        if (this.round >= this.letters.text.length) {
            this.completed();
        } else if(this.isLetterPractice){
            this.currentLetter = this.letters.text.substring(this.round, this.round + 1);
            this.round++;
            this.nextLetterDelay();
        } 
        else {
            this.rachet();
            switch (this.stage) {
                case TrialStage.sentence:
                    console.log('round: ' + this.round);
                    this.currentSentence = this.sentences[this.round];
                    if(!this.isPractice()){
                        this.sentenceDurationTimer = setTimeout(()=> this.timerSkip(), this.sentenceDuration);
                    }
                    break;
                case TrialStage.response:
                    clearTimeout(this.sentenceDurationTimer);
                    //TODO: fix this...this is ugly -- hack to skip letter
                    if(this.isSentencePractice){
                        this.round++;
                    }
                    break;
                case TrialStage.letter:
                    this.currentLetter = this.letters.text.substring(this.round, this.round + 1);
                    this.round++;
                    break;
            }
        }
    }

    calculatePartialCreditScore(entry: string){
        var entered = entry.split('');
        var score = 0;
        var p = 0;
        for(let l of entered){
            if(p < this.letters.text.length && l == this.letters.text[p]){
                this.scores.lettersCorrect++;
                score++;
            }
            p++;
        }
        this.scores.lettersTotal = this.letters.text.length;
        this.scores.proportion = score / this.letters.text.length;
    }

    isPractice(){
        var isPractice = false;
        if(this.isLetterPractice){
            isPractice = true;
        }
        if(this.isSentencePractice){
            isPractice = true;
        }
        if(this.isCombinedPractice){
            isPractice = true;
        }
        
        
        return isPractice;
    }

    private rachet() {
        switch (this.stage) {
            case TrialStage.sentence:
                this.practiceSentenceTimes.push(Date.now() - this.startSentenceTime);
                this.stage = TrialStage.response;
                break;
            case TrialStage.response:
                if(this.isSentencePractice){
                    this.startSentenceTime = Date.now();
                    this.stage = TrialStage.sentence;
                }else{
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
            this.finished();
        }
    }
}