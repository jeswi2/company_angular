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
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { combineLatest } from 'rxjs';
import { EmployeenavComponent } from './employeenav/employeenav.component';
import { LeaveapplyComponent } from './leaveapply/leaveapply.component';
import { SecuritynavComponent } from './securitynav/securitynav.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewlogComponent } from './viewlog/viewlog.component';

const appRoutes:Routes=[
{
  path:"",component:AdminloginComponent
},
{
  path:"adminDashbord",component:DashComponent
},
{
  path:"addEmp",component:AddemployeeComponent
},
{
  path:"employee",component:EmployeeloginComponent
},
{
  path:"security",component:SecurityloginComponent
},
{
  path:"viewEmp",component:ViewemployeeComponent
},
{
  path:"searchEmp",component:SearchemployeeComponent
},
{
  path:"addsec",component:AddsecurityComponent
},
{
  path:"viewsec",component:ViewsecurityComponent
},
{
  path:"searchsec",component:SearchsecurityComponent
},
{
  path:"applyLeave",component:LeaveapplyComponent
},
{
  path:"checkIn",component:CheckinComponent
},
{
  path:"checkOut",component:CheckoutComponent
},
{
  path:"viewLogs",component:ViewlogComponent
}






]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    AdminnavbarComponent,
    DashComponent,
    AddemployeeComponent,
    EmployeeloginComponent,
    SecurityloginComponent,
    ViewemployeeComponent,
    SearchemployeeComponent,
    AddsecurityComponent,
    ViewsecurityComponent,
    SearchsecurityComponent,
    EmployeenavComponent,
    LeaveapplyComponent,
    SecuritynavComponent,
    CheckinComponent,
    CheckoutComponent,
    ViewlogComponent
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
