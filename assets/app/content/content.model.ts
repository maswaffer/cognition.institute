import { Group } from '../services/group.service.js';
import { Condition } from '../services/condition.service.js';

export class ContentModel {

    participantId: string;
    currentGroup = new Group();
    currentState = Conditions.text;
    testUrl: string;
    showTestUrl = false;
    currentCondition = new Condition();
    currentFilename: string;
    canPrevious: boolean;
    

    myFileIndex = 0;
    myConditions = new Array<Condition>();
    myTopics: number[];

    private topics: number[][];
    constructor() {
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
        if(this.myFileIndex < this.currentCondition.fileNames.length){
            this.currentFilename = this.currentCondition.fileNames[this.myFileIndex];
        }else{
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

    setButtonFlags(){
        if(this.myFileIndex == 0){
            this.canPrevious = false;
        }else{
            this.canPrevious = true;
        }
        
    }

    setGroups(groups: Group[]) {
        this.currentGroup = groups.filter(g => g.pid == this.participantId)[0];
        this.myTopics = this.topics[this.currentGroup.gid - 1];
    }

    setConditions(conditions: Array<Condition>) {
        this.myConditions = conditions;
    }

    setCurrentStage(lastCondition: number) {
        if (lastCondition == 0) {
            this.currentState = Conditions.text;

        } else if (lastCondition == 1) {
            this.currentState = Conditions.image;

        } else if (lastCondition == 2) {
            this.currentState = Conditions.animation;
        }
        else if (lastCondition == 3) {
            this.currentState = Conditions.final;
        } else {
            console.log("last condition not found");
        }
        this.currentCondition = this.myConditions[this.currentState - 1];
        this.currentFilename = this.currentCondition.fileNames[0];
        this.testUrl = this.currentCondition.testUrl + "&lastStage=" + this.currentState + "&pid=" + this.participantId;
        this.setButtonFlags();
        console.log("url " + this.testUrl);
    }



}

enum Conditions {
    text = 1,
    image = 2,
    animation = 3,
    final = 4
}