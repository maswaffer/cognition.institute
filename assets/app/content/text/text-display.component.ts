import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
    selector: 'text-display', 
    templateUrl: 'app/content/text/text-display.component.html',
    providers: [
        TextService
    ]
})

export class TextDisplayComponent implements OnChanges{
    @Input() fileName: string;
    text: string[];

    errorMessage: string;
    constructor(private textService: TextService){}

    ngOnChanges(changes: SimpleChanges){
        this.loadFile();
    }

    loadFile(){
        if(this.fileName == null){

        }else{
        console.log("looking for file" + this.fileName);
        this.textService.getText(this.fileName)
            .subscribe(
                text => {
                    this.formatText(text);
                },
                error => this.errorMessage = <any>error
            );
        }
    }

    formatText(text: string){
        this.text = text.split('\n');
    }
}