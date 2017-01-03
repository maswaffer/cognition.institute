import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RspanComponent } from './rspan.component';
import { RspanRoutingModule, rspanRoutedComponents } from './rspan-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RspanRoutingModule
    ],
    declarations: [
        rspanRoutedComponents,
    ]
})
export class RspanModule { }