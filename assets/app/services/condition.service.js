"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
class Condition {
}
exports.Condition = Condition;
let ConditionService = class ConditionService {
    constructor() {
        this.definitions = {
            "Text": {
                1: {
                    "Title": "1: Causes of Lightning",
                    "TestURL": "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
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
                    "TestURL": "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                    "Files": [
                        "ia1.txt",
                        "ia2.txt",
                        "ia3.txt",
                        "ia4.txt"
                    ]
                },
                3: {
                    "Title": "1: How fMRI works",
                    "TestURL": "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
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
                    "TestURL": "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                    "Files": [
                        "l1.png",
                        "l2.png",
                        "l3.png",
                        "l4.png",
                        "l5.png"
                    ]
                },
                2: {
                    "Title": "2: Causes of Ice Ages",
                    "TestURL": "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                    "Files": [
                        "ia1.png",
                        "ia2.png",
                        "ia3.png",
                        "ia4.png"
                    ]
                },
                3: {
                    "Title": "2: How fMRI works ",
                    "TestURL": "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
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
                    "TestURL": "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                    "Files": [
                        "l1.html",
                        "l2.html",
                        "l3.html",
                        "l4.html"
                    ]
                },
                2: {
                    "Title": "3: Causes of Ice Ages",
                    "TestURL": "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
                    "Files": [
                        "ia1.html",
                        "ia2.html",
                        "ia3.html",
                        "ia4.html"
                    ]
                },
                3: {
                    "Title": "3: How fMRI works",
                    "TestURL": "https://unco.co1.qualtrics.com/SE/?SID=SV_4MFVwHUER95OmSV",
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
    getConditions(topics) {
        let ls = new Array();
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
};
ConditionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConditionService);
exports.ConditionService = ConditionService;
//# sourceMappingURL=condition.service.js.map