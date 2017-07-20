
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {EngineerListComponent} from "./engineer-list.component";
import {EngineerService} from "./engineer.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BaseRequestOptions, HttpModule, JsonpModule, RequestMethod, ResponseOptions} from "@angular/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import {EngineerInfomationComponent} from "./engineer-infomation.component";
import {MaterialModule, MdButtonModule, MdInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import {Engineer} from "./engineer";
import {MockBackend, MockConnection} from "@angular/http/testing";
import { Headers, Http } from '@angular/http';
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

describe('BannerComponent (inline template)', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

  });
  it('EngineerService is available', () => {
    const service = fixture.debugElement.injector.get(EngineerService);
    expect(service).toBeTruthy();
  });
  it('EngineerService getAll should be call', async(() => {
    const service = fixture.debugElement.injector.get(EngineerService);
    spyOn(service, 'handleError');
    service.getAll().then(function(data){
      expect(service.handleError).not.toHaveBeenCalled();
    });

  }));

  it('EngineerService get should be call', async(() => {
    const service = fixture.debugElement.injector.get(EngineerService);
    spyOn(service, 'handleError');
    service.get(1).then((engineer) => {
      expect(service.handleError).not.toHaveBeenCalled();
    });
  }));
  it('EngineerService save should be call', async(() => {
    const service = fixture.debugElement.injector.get(EngineerService);
    spyOn(service, 'handleError');
    let engineer = new Engineer();
    engineer.firstName = "first ";
    engineer.lastName = "last ";
    engineer.programing = "PHP";
    engineer.dateOfBirth = "1990-01-15";
    service.save(engineer).then((result) => {
      expect(service.handleError).not.toHaveBeenCalled();
    });
  }));
  it('EngineerService update should be call', async(() => {
    const service = fixture.debugElement.injector.get(EngineerService);
    spyOn(service, 'handleError');
    let engineer = new Engineer();
    engineer.id = 1;
    engineer.firstName = "first ";
    engineer.lastName = "last ";
    engineer.programing = "PHP";
    engineer.dateOfBirth = "1990-01-15";
    service.update(engineer).then((result) => {
      expect(service.handleError).not.toHaveBeenCalled();
    });
  }));
});