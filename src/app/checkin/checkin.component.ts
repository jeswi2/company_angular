import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private myapi:ApiService) { }



  emp_code=""

checkIn=()=>{
let data={
  "emp_code":this.emp_code,
  "login_security_code":localStorage.getItem("security_code")
}

this.myapi.checkIn(data).subscribe()
this.emp_code=""
}





  ngOnInit(): void {
  }

}
