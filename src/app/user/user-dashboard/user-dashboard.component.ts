import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'app/user/user-dashboard/user-classes/User';
import { Address } from 'app/core/UserAddress';
import {UserService} from 'app/user/user.service'
import Swal from 'sweetalert2';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  spinnerStyle = Spinkit;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  userDetails;
  submitted:boolean;
  changedivFlag;
  isReadOnly:boolean;
  submitFlag:string;
  userId:any;
  hideShow:any; //1-show editbuttob 2-show  submit and back button
  constructor(private userService:UserService) { }
  userProfileDetais=new FormGroup(
  {
    userName:new FormControl('',{validators:[Validators.pattern("[a-zA-Z][a-zA-Z ]*")]}),
    emailId:new FormControl('',{validators:[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$")]}),
    mobileNumber:new FormControl('',{validators:[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[6-9][0-9]*$")]}),
    doorNumber:new FormControl('',{validators:[Validators.required,Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9-/ ]*")]}),
    locality:new FormControl('',{validators:[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*")]}),
    streetName:new FormControl('',{validators:[Validators.required, Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9 ]*")]}),
    city:new FormControl('',{validators:[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*")]}),
    state:new FormControl('',{validators:[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*")]}),
    pincode:new FormControl('',{validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6),Validators.pattern("[1-9][0-9]*")]}),
    
  } )
 
  get fva() {
    return this.userProfileDetais.controls
  }
 public editUser(){
    

    let address:Address={
      doorNumber:this.userProfileDetais.value.doorNumber,
      streetName:this.userProfileDetais.value.streetName,
      locality:this.userProfileDetais.value.locality,
      city:this.userProfileDetais.value.city,
      zipcode:this.userProfileDetais.value.pincode,
      state:this.userProfileDetais.value.state,
    }
    let user:User={
      userId:this.userId,
      userName:this.userProfileDetais.value.userName,
      mobileNumber:this.userProfileDetais.value.mobileNumber,
      mailId:this.userProfileDetais.value.emailId,
      address:address
    }

    this.userService.editUser(user).subscribe(data=>{
       console.log("message"+data);
     
    })
    this.Toast.fire({
      icon: 'success',
      title: 'Successfully Edited'
    })
    this.isReadOnly=true; 
    this.hideShow=1;
  }


  public changePassword(){
    this.changedivFlag=2;
  }
  makeEditable(){
    this.submitted=false;
    this.isReadOnly=false;   
    this.hideShow=2;
  }
  callReadonly(){
    this.isReadOnly=true; 
    this.hideShow=1;
    location.reload();
  }
  ngOnInit() {
    this.hideShow=1;
    this.changedivFlag=1;
    this.isReadOnly=true;
    this.submitFlag="true";
    let userData = JSON.parse(localStorage.getItem("user"));
    this.userDetails=userData;
    this.userId=userData.userId;       
    this.userService.geteditUserDetails(this.userId).subscribe(data=>{
      let str = JSON.stringify(data)
        let daata = JSON.parse(str)
      console.log("userDetails="+daata.userName)
      this.userDetails=daata;     
  })
}}