import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RspanComponent } from './rspan.component';

const routes: Routes = [
    { path: 'rspan', component: RspanComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RspanRoutingModule{}

export const rspanRoutedComponents = [
    RspanComponent
]