import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  security_code=""

  readvalues=()=>{
    let data={
      "security_code":this.security_code
    }
    console.log(data)
    this.myapi.secuSearch(data).subscribe(
      (res)=>{
        this.dataSearch=res
        
      }
    )
  }


  editSec=()=>{
  this.myapi.secuEdit(this.dataSearch[0]).subscribe(
    (res)=>{
      alert ("successfully updated")
    }
  )
}


  dataSearch:any=[]
  ngOnInit(): void {
  }

}
