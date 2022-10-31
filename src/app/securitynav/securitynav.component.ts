import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-securitynav',
  templateUrl: './securitynav.component.html',
  styleUrls: ['./securitynav.component.css']
})
export class SecuritynavComponent implements OnInit {

  constructor(private myRouter:Router) { }

  logout=()=>{
    localStorage.clear
    this.myRouter.navigate(["/security"])
  }

  ngOnInit(): void {
  }

}
