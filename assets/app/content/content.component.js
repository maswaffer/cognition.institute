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
const router_1 = require("@angular/router");
const group_service_js_1 = require("../services/group.service.js");
const condition_service_js_1 = require("../services/condition.service.js");
const content_model_1 = require("./content.model");
let ContentComponent = class ContentComponent {
    constructor(groupService, conditionService, route) {
        this.groupService = groupService;
        this.conditionService = conditionService;
        this.route = route;
        this.model = new content_model_1.ContentModel(conditionService);
    }
    ngOnInit() {
        this.model.CreateCombinations();
        this.loadGroups();
        this.getParticipantId();
    }
    next() {
        this.model.next();
    }
    previous() {
        this.model.previous();
    }
    goToTest() {
        window.location.href = this.model.getTestURL();
    }
    loadGroups() {
        this.groupService.getGroups()
            .subscribe(groups => {
            this.model.setGroups(groups);
            this.getLastCondition();
        }, error => this.errorMessage = error);
    }
    getParticipantId() {
        this.model.participantId = this.route.snapshot.params['pid'];
    }
    getLastCondition() {
        let lastCondition = 0;
        var p = this.route.snapshot.params['lastStage'];
        //var p = this.route.snapshot.queryParams['lastStage'];
        if (p == null) {
            console.log("no last condition param");
        }
        else {
            console.log("last condition " + p);
            lastCondition = +p;
        }
        this.model.setCurrentStage(lastCondition);
    }
};
ContentComponent = __decorate([
    core_1.Component({
        selector: 'content',
        templateUrl: 'app/content/content.component.html',
        providers: [
            group_service_js_1.GroupService,
            condition_service_js_1.ConditionService
        ]
    }),
    __metadata("design:paramtypes", [group_service_js_1.GroupService,
        condition_service_js_1.ConditionService,
        router_1.ActivatedRoute])
], ContentComponent);
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map