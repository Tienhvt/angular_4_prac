import { Component, OnInit } from '@angular/core';
import {Engineer} from "./engineer";
import {EngineerService} from "./engineer.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./app.component.css']
})

export class EngineerListComponent implements OnInit {
  title = 'Engineer list';
  engineer: Engineer;
  engineers: Engineer[] = [];
  constructor(
    private engineerService: EngineerService,
    private location: Location,
    private router: Router
  ) {}

  registerEngineer(): void {
    console.log('abc');
    let link = ['/add'];
    this.router.navigate(link);
  }
  updateEngineer(engineer: Engineer): void {
    let link = ['/update', engineer.id];
    this.router.navigate(link);
  }
  ngOnInit(): void {
    this.engineerService.getAll()
      .then(engineers => this.engineers = engineers);
  }
  exchangeDate(date:string): string{
    var d = new Date(date).toDateString();
    return d.substring(3);
  }
}
