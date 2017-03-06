import { Group } from '../services/group.service.js';
import { ConditionService, Condition } from '../services/condition.service.js';

export class ContentModel {

    participantId: string;
    currentGroup = new Group();
    currentState = 1;
    currentMode = 1;
    showTestUrl = false;
    currentCondition = new Condition();
    currentFilename: string;
    canPrevious: boolean;
    startTime: number;

    myFileIndex = 0;
    myModes: number[];
    myTopics: number[];
    allModes = new Array<number[]>();
    allTopics= new Array<number[]>();

    private topics: number[][];
    constructor(private conditionService: ConditionService) {
        
    }

    next() {
        
        this.myFileIndex++;
        if (this.myFileIndex < this.currentCondition.fileNames.length) {
            this.currentFilename = this.currentCondition.fileNames[this.myFileIndex];
        } else {
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
        } else {
            this.canPrevious = true;
        }

    }

    getTestURL(){
        var studyTime = new Date().getTime() - this.startTime;
        var testUrl = this.currentCondition.testUrl + 
                            "&lastStage=" + this.currentState + 
                            "&pid=" + this.participantId +
                            "&mode=" + this.currentMode +
                            "&studytime=" + studyTime;
        return testUrl;
    }

    setGroups(groups: Group[]) {
        this.currentGroup = groups.filter(g => g.pid == this.participantId)[0];
        this.myModes = this.allModes[this.currentGroup.gid - 1];
        this.myTopics = this.allTopics[this.currentGroup.gid - 1];
        console.log('GID: ' + this.currentGroup.gid);
        console.log('Group: ' + (this.currentGroup.gid - 1));
    }

    setCurrentStage(lastCondition: number) {
        this.currentState = lastCondition + 1;
        if(this.currentState < 4){
            var topicIndex = this.myTopics[this.currentState - 1];
            var modeIndex = this.myModes[this.currentState - 1];

            console.log('Mode: ' + modeIndex);
            console.log('Topic: ' + topicIndex);
            this.currentCondition = this.conditionService.getConditions(modeIndex, topicIndex);
            this.currentMode = modeIndex;

            this.currentFilename = this.currentCondition.fileNames[0];
            
            this.startTime = new Date().getTime();
        }else{
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
            //console.log("i: " + i + " t: " + topicIndex + " m: " + modeIndex);  
            this.allModes[i] = modes[modeIndex];
            this.allTopics[i] = topics[topicIndex];
        }

    }
}

