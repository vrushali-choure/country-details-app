import { Component, ViewChild, ViewChildren, QueryList, DoCheck, OnInit, AfterContentChecked } from '@angular/core';
import {CountryData} from 'src/common/constant';
import{CreateCountryDataComponent} from './create-country-data/create-country-data.component';
import { KeyRegistry } from '../../node_modules/@angular/core/src/di/reflective_key';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck,OnInit,AfterContentChecked
 {

  title = 'country-details-app';
  values:any;
  @ViewChildren(CreateCountryDataComponent) childComponent : QueryList<CreateCountryDataComponent>;
  dataValue=[];
  svalue=[];
  cdetails=[];  
  keys=[];
  constructor(){
    this.values=CountryData;
    console.log(this.values);  
  }

  ngDoCheck()
  {
    console.log(this.childComponent); 
  }

  ngOnInit()
  {
    this.dataValue.push(this.values);
    console.log(this.dataValue);
  }

  ngAfterContentChecked()
  {
   
  }
 selection (data)
  {
    this.svalue=data;
    console.log(data);

     this.keys = Object.keys(this.dataValue[0]);
     console.log(this.keys);
    this.keys.forEach(k=> {
        k==this.svalue;
    });
    console.log(Object.keys(CountryData));

    this.cdetails =this.dataValue.filter(k=>{
    return Object.keys(CountryData)==this.svalue;
    });
    console.log(this.cdetails);
  }
  }
