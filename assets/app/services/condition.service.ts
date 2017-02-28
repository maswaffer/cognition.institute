import { Injectable } from '@angular/core';

export class Condition {
    title: string;
    fileNames: string[];
    testUrl: string;
}

@Injectable()
export class ConditionService {

    
    getConditions(mode: number, topic: number) {
        let c = new Condition();
        c.title = this.definitions[mode][topic].Title;
        c.testUrl = this.definitions[mode][topic].TestURL;
        c.fileNames = this.definitions[mode][topic].Files;

        return c;
    }

    private definitions = {
        0: {
            0: {
                "Title": "Causes of Lightning",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_8HRsORJXbFzOKFv",
                "Files": [
                    "l1.txt",
                    "l2.txt",
                    "l3.txt",
                    "l4.txt",
                    "l5.txt"
                ]
            },
            1: {
                "Title": "Causes of Ice Ages",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "ia1.txt",
                    "ia2.txt",
                    "ia3.txt",
                    "ia4.txt"
                ]
            },
            2: {
                "Title": "How fMRI works",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_42W9e1doayQAY97",
                "Files": [
                    "fmri1.txt",
                    "fmri2.txt",
                    "fmri3.txt",
                    "fmri4.txt"
                ]
            },
        },
        1: {
            0: {
                "Title": "Causes of Lightning",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_8HRsORJXbFzOKFv",
                "Files": [
                    "l1.png",
                    "l2.png",
                    "l3.png",
                    "l4.png",
                    "l5.png"
                ]
            },
            1: {
                "Title": "Causes of Ice Ages",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "ia1.png",
                    "ia2.png",
                    "ia3.png",
                    "ia4.png"
                ]
            },
            2: {
                "Title": "How fMRI works ",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_42W9e1doayQAY97",
                "Files": [
                    "fmri1.png",
                    "fmri2.png",
                    "fmri3.png",
                    "fmri4.png",
                    "fmri5.png"
                ]
            },
        },
        2: {
            0: {
                "Title": "Causes of Lightning",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_8HRsORJXbFzOKFv",
                "Files": [
                    "lightning/Panel1.html",
                    "l2.html",
                    "l3.html",
                    "l4.html"
                ]
            },
            1: {
                "Title": "Causes of Ice Ages",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "ia1.html",
                    "ia2.html",
                    "ia3.html",
                    "ia4.html"
                ]
            },
            2: {
                "Title": "How fMRI works",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_42W9e1doayQAY97",
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

