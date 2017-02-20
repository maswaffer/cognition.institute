import { Component, Input} from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
    selector: 'image-display', 
    templateUrl: 'app/content/image/image-display.component.html'
})

export class ImageDisplayComponent {
    @Input() fileName: string;
    

}