
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {EngineerListComponent} from "./engineer-list.component";
import {EngineerService} from "./engineer.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BaseRequestOptions, HttpModule, RequestMethod, ResponseOptions} from "@angular/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import {EngineerInfomationComponent} from "./engineer-infomation.component";
import {MaterialModule, MdButtonModule, MdInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import {Engineer} from "./engineer";
import {MockBackend, MockConnection} from "@angular/http/testing";
import { Headers, Http } from '@angular/http';
import {Observable} from "rxjs/Observable";
import DEFAULT_TIMEOUT_INTERVAL = jasmine.DEFAULT_TIMEOUT_INTERVAL;
beforeEach(() => {
  TestBed.configureTestingModule({
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
      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
        deps: [ MockBackend, BaseRequestOptions ]
      },
      {provide: APP_BASE_HREF, useValue : '/' }],
  });

});




describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});

describe('EngineerService without the TestBed', () => {
  var service: EngineerService;
  var rootScope;
  //let engineer: Engineer;
  //let http : Http;

  beforeEach(
    inject([ MockBackend, Http],
    (mb: MockBackend, http: Http) => {
      service = new EngineerService(http);
    }));
  beforeEach(inject(function (_$rootScope_) {
    rootScope = _$rootScope_;
  }));
  it('#getAll shoud be success', function(done){
    spyOn(service, 'handleError');
    console.log(service);

    service.getAll().then((engineers) => {
      expect(service.handleError).not.toHaveBeenCalled();
      done();
    })
  });

});


