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
                    "lterms.txt",
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
                    "iaterms.txt",
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
                    "fmriterms.txt",
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
                    "lkeyterms.png",
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
                    "iakeyterms.png",
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
                    "fmrikeyterms.png",
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
                    "lightning/PanelKT.html",
                    "lightning/Panel1.html",
                    "lightning/Panel2.html",
                    "lightning/Panel3.html",
                    "lightning/Panel4.html",
                    "lightning/Panel5.html"
                ]
            },
            1: {
                "Title": "Causes of Ice Ages",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                "Files": [
                    "iceages/PanelKT.html",
                    "iceages/Panel1.html",
                    "iceages/Panel2.html",
                    "iceages/Panel3.html",
                    "iceages/Panel4.html"
                ]
            },
            2: {
                "Title": "How fMRI works",
                "TestURL" : "https://unco.co1.qualtrics.com/SE/?SID=SV_42W9e1doayQAY97",
                "Files": [
                    "fmri/PanelKT.html",
                    "fmri/Panel1.html",
                    "fmri/Panel2.html",
                    "fmri/Panel3.html",
                    "fmri/Panel4.html",
                    "fmri/Panel5.html"   
                ]
            },
        }
       
    };

}

