import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RspanComponent } from './rspan.component';
import { LetterRecallComponent } from '../letterRecall/letterRecall.component';

const routes: Routes = [
    { path: 'rspan', component: RspanComponent },
    { path: 'letters', component: LetterRecallComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RspanRoutingModule { }

export const rspanRoutedComponents = [
    RspanComponent,
    LetterRecallComponent
]