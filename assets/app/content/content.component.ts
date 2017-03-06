import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService, Group } from '../services/group.service.js';
import { ConditionService, Condition } from '../services/condition.service.js';
import { ContentModel } from './content.model';

@Component({
    selector: 'content',
    templateUrl: 'app/content/content.component.html',
    providers: [
        GroupService,
        ConditionService
    ]
})

export class ContentComponent implements OnInit {

    model: ContentModel;
    errorMessage: string;

    constructor(private groupService: GroupService,
        private conditionService: ConditionService,
        private route: ActivatedRoute) {
        this.model = new ContentModel(conditionService);
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

    goToTest(){
        window.location.href = this.model.getTestURL();
    }

    private loadGroups() {
        this.groupService.getGroups()
            .subscribe(
            groups => {
                this.model.setGroups(groups);
                this.getLastCondition();
            },
            error => this.errorMessage = <any>error
            );
    }

    private getParticipantId() {
        this.model.participantId = this.route.snapshot.params['pid'];
    }

    private getLastCondition() {
        let lastCondition = 0;
        var p = this.route.snapshot.params['lastStage'];
        //var p = this.route.snapshot.queryParams['lastStage'];
        if (p == null) {
            console.log("no last condition param");
        } else {
            console.log("last condition " + p);
            lastCondition = +p;
        }
        this.model.setCurrentStage(lastCondition);
    }





}