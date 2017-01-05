import { Component, OnInit } from '@angular/core';
import { Sentence, SentenceService } from '../services/sentence.service.js';
import { Letters, LettersService } from '../services/letters.service.js';
import { Trial, TrialFactory, TrialKeeper} from '../app.model.js';

@Component({
    selector: 'rspan',
    templateUrl: 'app/rspan/rspan.component.html',
    providers: [
        SentenceService,
        LettersService, 
        Trial,
        TrialFactory,
        TrialKeeper
    ]
})

export class RspanComponent implements OnInit{
     ngOnInit() {
        
    }
}
