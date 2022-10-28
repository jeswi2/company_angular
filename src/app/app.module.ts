import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { DashComponent } from './dash/dash.component';
import { HttpClientModule } from '@angular/common/http';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const appRoutes:Routes=[
{
  path:"",component:AdminloginComponent
},
{
  path:"adminDashbord",component:DashComponent
},
{
  path:"addEmp",component:AddemployeeComponent
}


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    AdminnavbarComponent,
    DashComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
