import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { ContentRoutingModule, contentRoutedComponents} from './content-routing.module';
import { TextDisplayComponent } from './text/text-display.component';
import { ImageDisplayComponent } from './image/image-display.component';
import { SafePipe } from '../pipes/safe-pipe';

@NgModule({
    imports: [
        BrowserModule, 
        HttpModule,
        FormsModule,
        ContentRoutingModule
    ],
    declarations: [
        contentRoutedComponents,
        TextDisplayComponent,
        ImageDisplayComponent,
        SafePipe
    ]
})

export class ContentModule{}