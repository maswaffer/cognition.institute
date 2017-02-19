import { Injectable } from '@angular/core';

export class Condition {
    id: number;
    title: string;
    fileNames: string[];
}

@Injectable()
export class ConditionService {

    
    getConditions(topics: number[]) {
        let ls = new Array<Condition>();
        let text = new Condition();
        text.id = topics[0];
        text.title = this.definitions.Text[topics[0]].Title;
        text.fileNames = this.definitions.Text[topics[0]].Files;

        let image = new Condition();
        image.id = topics[1];
        image.title = this.definitions.Images[topics[1]].Title;
        image.fileNames = this.definitions.Images[topics[1]].Files;
        
        let anim = new Condition();
        anim.id = topics[2];
        anim.title = this.definitions.Animation[topics[2]].Title;
        anim.fileNames = this.definitions.Animation[topics[2]].Files;

        ls.push(text);
        ls.push(image);
        ls.push(anim);

        return ls;
    }

    private definitions = {
        "Text": {
            1: {
                "Title": "Lightning - A",
                "Files": [
                    "l1.txt",
                    "l2.txt",
                    "l3.txt",
                    "l4.txt"
                ]
            },
            2: {
                "Title": "Ice Ages - A",
                "Files": [
                    "ia1.txt",
                    "ia2.txt",
                    "ia3.txt",
                    "ia4.txt"
                ]
            },
            3: {
                "Title": "fMRI - A",
                "Files": [
                    "fmri1.txt",
                    "fmri2.txt",
                    "fmri3.txt",
                    "fmri4.txt"
                ]
            },
        },
        "Images": {
            1: {
                "Title": "Lightning - B",
                "Files": [
                    "l1.png",
                    "l2.png",
                    "l3.png",
                    "l4.png"
                ]
            },
            2: {
                "Title": "Ice Ages - B",
                "Files": [
                    "ia1.png",
                    "ia2.png",
                    "ia3.png",
                    "ia4.png"
                ]
            },
            3: {
                "Title": "fMRI - B",
                "Files": [
                    "fmri1.html",
                    "fmri2.html",
                    "fmri3.html",
                    "fmri4.html"
                ]
            },
        },
        "Animation": {
            1: {
                "Title": "Lightning - C",
                "Files": [
                    "l1.txt",
                    "l2.txt",
                    "l3.txt",
                    "l4.txt"
                ]
            },
            2: {
                "Title": "Ice Ages - C",
                "Files": [
                    "ia1.png",
                    "ia2.png",
                    "ia3.png",
                    "ia4.png"
                ]
            },
            3: {
                "Title": "fMRI - C",
                "Files": [
                    "fmri1.html",
                    "fmri2.html",
                    "fmri3.html",
                    "fmri4.html"
                ]
            },
        }
       
    };

}

