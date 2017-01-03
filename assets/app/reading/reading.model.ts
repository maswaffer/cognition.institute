import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';

export class TrialKeeper {
    trials: Trial[];
    currentTrial: Trial;
    tf: TrialFactory = new TrialFactory();

    trial = 0;


    loadTrials(sentenceService: SentenceService, lettersService: LettersService) {
        //let tf = new TrialFactory();
        this.tf.finished = () => this.loadCurrentTrial();
        this.tf.loadModels(sentenceService, lettersService);
        //this.trials = this.tf.trials;
    }

    loadCurrentTrial(){
        console.log('callback: loadCurrentTrial');
        this.trials = this.tf.trials;
        this.currentTrial = this.trials[0];
        console.log(this.currentTrial.letters.text);
    }

    next(){
        this.currentTrial.next();
    }
}

enum TrialStage{
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

    populate(s: Sentence[], l: Letters) {
        this.sentences = s;
        this.letters = l;
        this.currentSentence = s[0];
        this.currentLetter = l.text.substring(0, 1);
        this.stage = TrialStage.sentence;
    }

    next(){
        this.rachet();
        switch(this.stage)
        {
            case TrialStage.sentence:
                this.currentSentence = this.sentences[this.round];
            break;

            case TrialStage.response:
            break;

            case TrialStage.letter:
                this.currentLetter = this.letters.text.substring(this.round, this.round + 1);
                this.round ++;
            break;
        }
    }
    
    private rachet(){
        switch(this.stage)
        {
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

    finished: {(): void;};

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