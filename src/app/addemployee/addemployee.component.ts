import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  emp_code=""
  name=""
  dob=""
  phone=""
  address=""
  designation=""
  email=""
  password=""
  doj=""

  readvalues=()=>{
    let data={
      "emp_code":this.emp_code,
  "name":this.name,
  "dob":this.dob,
  "phone":this.phone,
  "address":this.address,
  "designation":this.designation,
  "email":this.email,
  "password":this.password,
  "doj":this.doj
    }
    console.log(data)
    this.myapi.addEmployee(data).subscribe(
      (response)=>{
        alert("Data Added")
      }
    )
    
  
  }


  ngOnInit(): void {
  }

}
