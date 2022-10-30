import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/empAdd",data)
  }

  deleteEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/delete",data)
  }

  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/view")
  }

}
