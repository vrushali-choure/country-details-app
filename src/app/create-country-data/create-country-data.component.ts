import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { KeyRegistry } from '../../../node_modules/@angular/core/src/di/reflective_key';

@Component({
  selector: 'app-create-country-data',
  templateUrl: './create-country-data.component.html',
  styleUrls: ['./create-country-data.component.css']
})
export class CreateCountryDataComponent implements OnInit{
  
  @Input()CountryDataParent:any;
  CountryData=[];
  countryDetails=[];
  @ViewChild('countryDropDown') selection:ElementRef;
  selectedValue:any;
  keys:any;
  @Output() dropDown:EventEmitter<any> =new EventEmitter<any>();
  constructor()
  {
  
  }
 
  ngOnInit()
  {
   this.countryDetails.push(this.CountryDataParent);  
    this.keys=Object.keys(this.countryDetails[0]);
    console.log(this.keys);
   }
  
  onChange($event)
  {
    this.selectedValue=this.selection.nativeElement.value
    this.dropDown.emit(this.selectedValue);
  }

}
