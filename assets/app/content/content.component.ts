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

    model = new ContentModel();
    errorMessage: string;

    constructor(private groupService: GroupService, 
                private conditionService: ConditionService,
                private route: ActivatedRoute){}

    ngOnInit(){
        this.loadGroups();
        this.getParticipantId();
    }

    private loadGroups() {
        this.groupService.getGroups()
            .subscribe(
                groups => {
                    this.model.setGroups(groups);
                    this.loadConditions();
                },
                error => this.errorMessage = <any>error
            );
    }

    private loadConditions(){
        this.model.setConditions(this.conditionService.getConditions(this.model.myTopics));
    }

    private getParticipantId(){
        this.model.participantId = this.route.snapshot.params['pid'];
    }
}