import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlogbyid',
  templateUrl: './viewlogbyid.component.html',
  styleUrls: ['./viewlogbyid.component.css']
})
export class ViewlogbyidComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.getLogData()
   }

  getLogData=()=>{
    let data={
     "emp_code":localStorage.getItem("emp_code")
    }
    this.myapi.viewLogById(data).subscribe(
     (res)=>{
       console.log("Entered")
       this.logData=res;
       console.log(res)
     }
    )
   }
 
  
    
     displayedColumns: string[] = ['emp_name', 'login_time', 'login_sec_name', 'logout_time','logout_sec_name'];
     logData :any =[]

  ngOnInit(): void {
  }

}
