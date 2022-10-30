import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewEmployee().subscribe(
      (data)=>{
        this.viewEmployee=data
      }
    )
  }
  delete=(emp_code:any)=>{
    let data={
      "emp_code":emp_code
    }
    this.myapi.deleteEmployee(data).subscribe(
      (res)=>{
        alert("deleted")
      }
    )
    this.fetchData()
  }


  viewEmployee:any=[]
  ngOnInit(): void {
  }

}
