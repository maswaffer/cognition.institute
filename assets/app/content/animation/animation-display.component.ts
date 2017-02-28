import { Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'animation-display', 
    templateUrl: 'app/content/animation/animation-display.component.html'
})

export class AnimationDisplayComponent implements OnChanges {
    @Input() fileName: string;
    fullFilename: string;

    ngOnChanges(...args: any[]){
        this.fullFilename = "/c/a/" + this.fileName;
    }

}