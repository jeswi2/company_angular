import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private myapi:ApiService,private myRouter:Router) { }

  email=""
  password=""

  readValues=()=>{
    let data={
      "email":this.email,
      "password":this.password
    
    
 
}
console.log(data)
this.myapi.empLogin(data).subscribe(
  (resp:any)=>{
    if (resp.length>0) {
 
      localStorage.setItem("emp_code",resp[0].emp_code)
      console.log(localStorage.getItem("emp_code"));
      localStorage.setItem("empname",resp[0].name)
this.myRouter.navigate(["/applyLeave"])
     
    } else {

      alert("Invalid credentials")
     
    }

  }
)
  }
  

  ngOnInit(): void {
  }

}
