import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AppRoutingModule,  } from './app-routing.module';
import { RspanModule } from './rspan/rspan.module';
import { ContentModule } from './content/content.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        RspanModule,
        ContentModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }