import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent implements OnInit {

  constructor() { }


  email=""
  password=""

  readValues=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
console.log(data)
  }
  ngOnInit(): void {
  }

}
