import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LetterRecallComponent } from './letterRecall/letterRecall.component';
import { ReadingComponent } from './reading/reading.component';

const routes: Routes = [
    { path: 'reading', component: ReadingComponent },
    { path: 'letters', component: LetterRecallComponent },
])];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

export const routedComponents = [
    ReadingComponent,
    LetterRecallComponent
]