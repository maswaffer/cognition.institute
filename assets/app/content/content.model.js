"use strict";
const group_service_js_1 = require("../services/group.service.js");
const condition_service_js_1 = require("../services/condition.service.js");
class ContentModel {
    constructor() {
        this.currentGroup = new group_service_js_1.Group();
        this.currentState = Conditions.text;
        this.showTestUrl = false;
        this.currentCondition = new condition_service_js_1.Condition();
        this.myFileIndex = 0;
        this.myConditions = new Array();
        this.topics = [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
        ];
    }
    next() {
        this.myFileIndex++;
        if (this.myFileIndex < this.currentCondition.fileNames.length) {
            this.currentFilename = this.currentCondition.fileNames[this.myFileIndex];
        }
        else {
            this.myFileIndex--;
            this.showTestUrl = true;
        }
    }
    previous() {
        this.myFileIndex--;
        this.currentFilename = this.currentCondition.fileNames[this.myFileIndex];
    }
    setGroups(groups) {
        this.currentGroup = groups.filter(g => g.pid == this.participantId)[0];
        this.myTopics = this.topics[this.currentGroup.gid - 1];
    }
    setConditions(conditions) {
        this.myConditions = conditions;
    }
    setCurrentStage(lastCondition) {
        if (lastCondition == 0) {
            this.currentState = Conditions.text;
        }
        else if (lastCondition == 1) {
            this.currentState = Conditions.image;
        }
        else if (lastCondition == 2) {
            this.currentState = Conditions.animation;
        }
        else if (lastCondition == 3) {
            this.currentState = Conditions.final;
        }
        else {
            console.log("last condition not found");
        }
        this.currentCondition = this.myConditions[this.currentState - 1];
        this.currentFilename = this.currentCondition.fileNames[0];
        this.testUrl = this.currentCondition.testUrl + "&lastStage=" + this.currentState + "&pid=" + this.participantId;
        console.log("url " + this.testUrl);
    }
}
exports.ContentModel = ContentModel;
var Conditions;
(function (Conditions) {
    Conditions[Conditions["text"] = 1] = "text";
    Conditions[Conditions["image"] = 2] = "image";
    Conditions[Conditions["animation"] = 3] = "animation";
    Conditions[Conditions["final"] = 4] = "final";
})(Conditions || (Conditions = {}));
//# sourceMappingURL=content.model.js.map