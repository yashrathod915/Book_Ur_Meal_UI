import { Router, Routes } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  spinnerStyle = Spinkit;
  constructor(private router : Router) { }
  ngOnInit() {
    console.log(this.title);
  }
  opened = false;
  title = "Admin Dashboard"
  logOut(){
    localStorage.removeItem("admin");
    localStorage.removeItem("role");
    this.router.navigate(['/HomePage'])
  }
  
}
