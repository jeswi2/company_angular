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



  empLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/emplogin",data)
  }


  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/search",data)
  }

  updateemployee=(data:any)=>{
    return this.http.post("http://localhost:8080/edit",data)
  }


  secuadd=(data:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",data)
  }
  
  secuLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/loginsecurity",data)

  }
  secuView=()=>{
    return this.http.get("http://localhost:8080/viewsecurity")
  }

  secuDelete=(data:any)=>{
    return this.http.post("http://localhost:8080/deletesecurity",data)
  }

  secuSearch=(data:any)=>{
    return this.http.post("http://localhost:8080/searchsecurity",data)
  }

  secuEdit=(data:any)=>{
    return this.http.post("http://localhost:8080/updatesecurity",data)
  }

  applyLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/leaveAdd",data)
  }

  checkIn=(data:any)=>{
    return this.http.post("http://localhost:8080/checkIn",data)
  }

  checkOut=(data:any)=>{
    return this.http.post("http://localhost:8080/checkOut",data)
  }

  viewCheckIn=()=>{
    return this.http.get("http://localhost:8080/viewCheckIn")
  }

  viewLog=()=>{
    return this.http.get("http://localhost:8080/viewAllLog")
  }
}
