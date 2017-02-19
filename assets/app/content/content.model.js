"use strict";
const group_service_js_1 = require("../services/group.service.js");
class ContentModel {
    constructor() {
        this.currentGroup = new group_service_js_1.Group();
        this.currentConditions = new Array();
        this.topics = [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
        ];
    }
    setGroups(groups) {
        this.currentGroup = groups.filter(g => g.pid == this.participantId)[0];
        this.myTopics = this.topics[this.currentGroup.gid - 1];
    }
    setConditions(conditions) {
        this.currentConditions = conditions;
    }
}
exports.ContentModel = ContentModel;
//# sourceMappingURL=content.model.js.map