
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {EngineerListComponent} from "./engineer-list.component";
import {EngineerService} from "./engineer.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import {EngineerInfomationComponent} from "./engineer-infomation.component";
import {MaterialModule, MdButtonModule, MdInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    EngineerListComponent,
    EngineerInfomationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule


  ],
  providers: [EngineerService,
    {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
