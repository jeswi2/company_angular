import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeenav',
  templateUrl: './employeenav.component.html',
  styleUrls: ['./employeenav.component.css']
})
export class EmployeenavComponent implements OnInit {

  constructor(private myRouter:Router) { }

  logout=()=>{
    localStorage.clear
    this.myRouter.navigate(["/employee"])
  }

  ngOnInit(): void {
  }

}
