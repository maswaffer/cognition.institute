import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LetterRecallComponent } from './letterRecall/letterRecall.component';

const routes: Routes = [
    { path: 'letters', component: LetterRecallComponent },
])];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

export const routedComponents = [
    LetterRecallComponent
]