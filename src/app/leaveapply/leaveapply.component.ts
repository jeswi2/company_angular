import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leaveapply',
  templateUrl: './leaveapply.component.html',
  styleUrls: ['./leaveapply.component.css']
})
export class LeaveapplyComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  date=""
  reason=""
  applydate=""
  type=""

applyLeave=()=>{
  let data={
    "emp_code":localStorage.getItem("emp_code"),
    "date":this.date,
    "reason":this.reason,
    "applydate":this.applydate,
    "type":this.type,
  }

  console.log(data)
  this.myapi.applyLeave(data).subscribe();
  alert("applied")

}

  ngOnInit(): void {
  }

}
