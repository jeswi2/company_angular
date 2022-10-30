import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  emp_code=""

  readvalues=()=>{
    let data={
      "emp_code":this.emp_code

    }
    console.log(data)
    this.myapi.searchEmployee(data).subscribe(
      (res)=>{
        this.data=res
      }
    )
    
  }
  updateEmp=()=>{
    
    this.myapi.updateemployee(this.data[0]).subscribe(
      (res)=>{
        alert("successfully updated")
      }
    )
  }


data:any=[]
  ngOnInit(): void {
  }

}
