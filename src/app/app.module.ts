import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxWebstorageModule} from 'ngx-webstorage'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { NutritionComponent } from './nutrition/nutrition.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NutritionComponent,
    //AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,NgxWebstorageModule.forRoot(),
    FormsModule,RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      },
      {
        path: 'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'nutrition',
        component:NutritionComponent
      },
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'*',
        component:HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
  //2bootstrap: [HomeComponent]
})
export class AppModule { }
