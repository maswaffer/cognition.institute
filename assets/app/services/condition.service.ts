import { Injectable } from '@angular/core';

export class Condition {
    id: number;
    title: string;
    fileNames: string[];
    testUrl: string;
}

@Injectable()
export class ConditionService {

    
    getConditions(topics: number[]) {
        let ls = new Array<Condition>();
        let text = new Condition();
        text.id = topics[0];
        text.title = this.definitions.Text[topics[0]].Title;
        text.testUrl = this.definitions.Text[topics[0]].TestURL;
        text.fileNames = this.definitions.Text[topics[0]].Files;

        let image = new Condition();
        image.id = topics[1];
        image.title = this.definitions.Images[topics[1]].Title;
        image.testUrl = this.definitions.Images[topics[1]].TestURL;
        image.fileNames = this.definitions.Images[topics[1]].Files;
        
        let anim = new Condition();
        anim.id = topics[2];
        anim.title = this.definitions.Animation[topics[2]].Title;
        anim.testUrl = this.definitions.Animation[topics[2]].TestURL;
        anim.fileNames = this.definitions.Animation[topics[2]].Files;

        ls.push(text);
        ls.push(image);
        ls.push(anim);

        return ls;
    }

    private definitions = {
        "Text": {
            1: {
                "Title": "1: Causes of Lightning",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "l1.txt",
                    "l2.txt",
                    "l3.txt",
                    "l4.txt",
                    "l5.txt"
                ]
            },
            2: {
                "Title": "1: Causes of Ice Ages",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "ia1.txt",
                    "ia2.txt",
                    "ia3.txt",
                    "ia4.txt"
                ]
            },
            3: {
                "Title": "1: How fMRI works",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
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
                "Title": "2: Causes of Lightning",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "l1.png",
                    "l2.png",
                    "l3.png",
                    "l4.png"
                ]
            },
            2: {
                "Title": "2: Causes of Ice Ages",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "ia1.png",
                    "ia2.png",
                    "ia3.png",
                    "ia4.png"
                ]
            },
            3: {
                "Title": "2: How fMRI works ",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "fmri1.png",
                    "fmri2.png",
                    "fmri3.png",
                    "fmri4.png",
                    "fmri5.png"
                ]
            },
        },
        "Animation": {
            1: {
                "Title": "3: Causes of Lightning",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "l1.html",
                    "l2.html",
                    "l3.html",
                    "l4.html"
                ]
            },
            2: {
                "Title": "3: Causes of Ice Ages",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "ia1.html",
                    "ia2.html",
                    "ia3.html",
                    "ia4.html"
                ]
            },
            3: {
                "Title": "3: How fMRI works",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
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

