import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{DispalyCountryDataComponent} from './display-country-data/display-country-data.component';
import{CreateCountryDataComponent} from './create-country-data/create-country-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DispalyCountryDataComponent,
    CreateCountryDataComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
