"use strict";
const group_service_js_1 = require("../services/group.service.js");
const condition_service_js_1 = require("../services/condition.service.js");
class ContentModel {
    constructor(conditionService) {
        this.conditionService = conditionService;
        this.currentGroup = new group_service_js_1.Group();
        this.currentState = 1;
        this.currentMode = 1;
        this.showTestUrl = false;
        this.currentCondition = new condition_service_js_1.Condition();
        this.myFileIndex = 0;
        this.allModes = new Array();
        this.allTopics = new Array();
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
        this.setButtonFlags();
    }
    previous() {
        this.myFileIndex--;
        this.currentFilename = this.currentCondition.fileNames[this.myFileIndex];
        this.setButtonFlags();
    }
    setButtonFlags() {
        if (this.myFileIndex == 0) {
            this.canPrevious = false;
        }
        else {
            this.canPrevious = true;
        }
    }
    setGroups(groups) {
        this.currentGroup = groups.filter(g => g.pid == this.participantId)[0];
        this.myModes = this.allModes[this.currentGroup.gid - 1];
        this.myTopics = this.allTopics[this.currentGroup.gid - 1];
    }
    setCurrentStage(lastCondition) {
        this.currentState = lastCondition + 1;
        if (this.currentState < 4) {
            var topicIndex = this.myTopics[this.currentState - 1];
            var modeIndex = this.myModes[this.currentState - 1];
            this.currentCondition = this.conditionService.getConditions(modeIndex, topicIndex);
            this.currentMode = modeIndex;
            this.currentFilename = this.currentCondition.fileNames[0];
            this.testUrl = this.currentCondition.testUrl + "&lastStage=" + this.currentState + "&pid=" + this.participantId;
        }
        else {
            this.currentMode = 99;
        }
        this.setButtonFlags();
    }
    CreateCombinations() {
        var topics = [
            [0, 1, 2],
            [0, 2, 1],
            [1, 0, 2],
            [1, 2, 0],
            [2, 0, 1],
            [2, 1, 0]
        ];
        var modes = [
            [0, 1, 2],
            [0, 2, 1],
            [1, 0, 2],
            [1, 2, 0],
            [2, 0, 1],
            [2, 1, 0]
        ];
        for (var i = 0; i < 36; i++) {
            var topicIndex = i % 6;
            var offset = Math.floor(i / 6);
            var modeIndex = topicIndex + offset < 6 ? topicIndex + offset : topicIndex + (offset - 6);
            this.allModes[i] = modes[modeIndex];
            this.allTopics[i] = topics[topicIndex];
        }
    }
}
exports.ContentModel = ContentModel;
//# sourceMappingURL=content.model.js.map