import { Sentence } from '../services/sentence.service.js';
import { Letters } from '../services/letters.service.js';


class Trial {
    sentences: Sentence[];
    letters: Letters;
    currentSentence = new Sentence();
    currentLetter: string;

    constructor(private s: Sentence[], private l: Letters){
        this.sentences = s;
        this.letters = l;
        this.currentSentence = s[0];
        this.currentLetter = this.letters.text.substring(0,1);
    }
}

class TrialFactory{
    createTrials(s: Sentence[], l: Letters[]){
        let trials: Trial[];
        let si = 0;
        for(let i in l){
            let lettersLength = l[i].text.length;
            let theseSentences = s.slice(si, si + lettersLength);
            let t = new Trial(theseSentences, l[i]);
            trials.concat(t);
            si = si + lettersLength + 1;
        }
        return trials;
    }
}