import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleaveid',
  templateUrl: './viewleaveid.component.html',
  styleUrls: ['./viewleaveid.component.css']
})
export class ViewleaveidComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.getLeaveData()
  }


  getLeaveData=()=>{
    let data={
     "emp_code":localStorage.getItem("emp_code")
    }
    this.myapi.viewLeaveById(data).subscribe(
     (res)=>{
       console.log("Entered")
       this.leaveData=res;
       console.log(res)
     }
    )
   }
 
 
     
     displayedColumns: string[] = ['name', 'date', 'reason', 'applydate','type','status'];

  leaveData:any=[]




  ngOnInit(): void {
  }

}
