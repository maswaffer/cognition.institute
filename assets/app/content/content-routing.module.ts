import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent} from './content.component';

const routes: Routes=[
    {path: 'content/:pid', component: ContentComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContentRoutingModule{

}

export const contentRoutedComponents =[
    ContentComponent
]