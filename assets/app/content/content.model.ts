import { Group } from '../services/group.service.js';
import { Condition } from '../services/condition.service.js';

export class ContentModel{

    participantId: string;
    currentGroup = new Group();
    currentConditions = new Array<Condition>();
    myTopics: number[];

    private topics: number[][];
    constructor(){
        this.topics = [
            [1,2,3],
            [1,3,2],
            [2,1,3],
            [2,3,1],
            [3,1,2],
            [3,2,1]
        ];
    }

    setGroups(groups: Group[])
    {
        this.currentGroup = groups.filter(g => g.pid == this.participantId)[0];
        this.myTopics = this.topics[this.currentGroup.gid - 1];
    }

    setConditions(conditions: Array<Condition>){
        this.currentConditions = conditions;
    }
    
}