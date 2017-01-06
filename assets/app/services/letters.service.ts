import { Injectable } from '@angular/core';

export class Letters {
    text: string;
}

@Injectable()
export class LettersService {

    theLetters: string[] = ["F", "H", "J", "K", "L", "N", "P", "Q", "R", "S", "T", "Y"];

    getLetters(numLetters: number[]) {
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

    shuffleArray(array: any) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

}

