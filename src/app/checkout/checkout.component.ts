import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.getCheckInData()
   }

  getCheckInData=()=>{
    this.myapi.viewCheckIn().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataCheck = resp;
        console.log(resp)
      }
      )
  }
  checkOut=(id:any)=>{
    let data = {
      "id":id,
      "logout_security_code":localStorage.getItem("security_code")
    }
    this.myapi.checkOut(data).subscribe()
    alert("Checked Out")
    this.getCheckInData()
  }

 
   
    displayedColumns: string[] = ['emp_code', 'login_time', 'update'];
    dataCheck :any =[]

  ngOnInit(): void {
  }

}
