import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import {Engineer} from "./engineer";
import {EngineerService} from "./engineer.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'engineer-info',
  templateUrl: './engineer-infomation.component.html',
  styleUrls: ['./app.component.css']
})
export class EngineerInfomationComponent implements OnInit {
  title = 'Engineer Infomation';
  engineer: Engineer;
  myForm: FormGroup;
  isBlur: boolean[] = [false, false];
  programings = [
    {value: 'Java', viewValue: 'Java'},
    {value: 'PHP', viewValue: 'PHP'},
    {value: 'Javascript', viewValue: 'Javascript'}
  ];
  months = [
    {value: 1, viewValue: 'January'},
    {value: 2, viewValue: 'February'},
    {value: 3, viewValue: 'March'},
    {value: 4, viewValue: 'April'},
    {value: 5, viewValue: 'May'},
    {value: 6, viewValue: 'June'},
    {value: 7, viewValue: 'July'},
    {value: 8, viewValue: 'August'},
    {value: 9, viewValue: 'September'},
    {value: 10, viewValue: 'October'},
    {value: 11, viewValue: 'November'},
    {value: 12, viewValue: 'December'},
  ];
  tmpDate: number;
  tmpMonth: number;
  tmpYear: number;
  constructor(
    private engineerService: EngineerService,
    private location: Location,
    private router: ActivatedRoute,
  ) {}

  save(): void {
    let date_str = this.myForm.value.year+'-'+this.myForm.value.month+'-'+this.myForm.value.date;

    this.engineer = this.myForm.value;
    this.engineer.dateOfBirth = date_str;
     this.engineerService.save(this.engineer)
       .then(() => this.goBack());
  }
  update(): void {
    let date_str = this.myForm.value.year+'-'+this.myForm.value.month+'-'+this.myForm.value.date;
    this.engineer.dateOfBirth = date_str;
    console.log(this.myForm.value, this.engineer);

    this.engineerService.update(this.engineer)
      .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', <any>Validators.required),
      programing: new FormControl('', <any>Validators.required),
      date: new FormControl('', <any>Validators.required),
      month: new FormControl('', <any>Validators.required),
      year: new FormControl('', <any>Validators.required)
    });

    this.router.params
      .switchMap((params: Params) => this.engineerService.get(+params['id']))
      .subscribe(engineer => this.convertDate(engineer));
  }
  onBlurMethod(event: any) { // without type info
    if(event.target.getAttribute('formControlName')=='firstName'){
      this.isBlur[0] = true;
    }
    if(event.target.getAttribute('formControlName')=='lastName')
    {
      this.isBlur[1] = true;
    }
  }
  createRange(min, max){
    let items = [];
    for(let i = min; i <= max; i++){

      items.push(i);
    }
    return items;
  }
  convertDate(engineer)
  {
    this.engineer = engineer;
    var dd = new Date(engineer.dateOfBirth);
    this.tmpDate = dd.getDate();
    this.tmpMonth = dd.getMonth() +1;
    this.tmpYear = dd.getFullYear();
  }
}
