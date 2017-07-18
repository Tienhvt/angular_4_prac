import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EngineerListComponent} from "./engineer-list.component";
import {EngineerInfomationComponent} from "./engineer-infomation.component";


const routes: Routes = [
  { path: '', redirectTo: '/engineer', pathMatch: 'full' },
  { path: 'engineer',  component: EngineerListComponent },
  { path: 'update/:id', component: EngineerInfomationComponent },
  { path: 'add',     component: EngineerInfomationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
