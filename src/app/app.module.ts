import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FirstPageComponent } from './component/first-page/first-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondPageComponent } from './component/second-page/second-page.component';
import { Route, Router } from '@angular/router';
import { User } from './model/User';
import { FormsModule } from '@angular/forms';
import { ThirdPageComponent } from './component/third-page/third-page.component';
import { FourthPageComponent } from './component/fourth-page/fourth-page.component';
import { FifthPageComponent } from './component/fifth-page/fifth-page.component';
import { SixthPageComponent } from './component/sixth-page/sixth-page.component';
import { SeventhPageComponent } from './component/seventh-page/seventh-page.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent,
  
    
  ],

  imports:[
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  
  exports: [
    MatListModule, 
  ],
  
  providers: [User],

  bootstrap: [AppComponent]
})
export class AppModule { }
