import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthenticationService } from 'app/core/authentication.service';
import { Address } from 'app/core/UserAddress';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/core/User';
import Swal from 'sweetalert2'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup
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
  constructor(private fb: FormBuilder,private router: Router, private auth: AuthenticationService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/img/examples/error-24px.svg'));
   }

  ngOnInit() {
    this.registerForm = this.fb.group({
      "userName": ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*")]],
      "mailId": ['', [Validators.required,Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$")]],
      "password": ['', [Validators.required, Validators.minLength(8), Validators.pattern("^((?!.* )(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*?()]).{8,})")]],
      "confirmPassword": ['', [Validators.required, Validators.minLength(8), Validators.pattern("^((?!.* )(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*?()]).{8,})")]],
      "mobileNumber": ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[6-9][0-9]*$")]],
      "doorNumber": ['', [Validators.required,Validators.pattern("[a-zA-Z0-9#][a-zA-Z0-9#',-/ ]*"),Validators.maxLength(15)]],
      "streetName": ['', [Validators.required, Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9',-/ ]*"),Validators.maxLength(40)]],
      "locality": ['', [Validators.required, Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9',-/ ]*"),Validators.maxLength(18)]],
      "city": ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*"),Validators.maxLength(18)]],
      "state": ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*"),Validators.maxLength(18)]],
      "zipcode": ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6),Validators.pattern("[1-9][0-9]*")]]
    });
  }
  check(){

  }

  get fva() {
    return this.registerForm.controls
  }

  registerUser() {
    if(this.registerForm.value.password === this.registerForm.value.confirmPassword){
    let address: Address = {
      doorNumber: this.registerForm.value.doorNumber,
      streetName: this.registerForm.value.streetName,
      locality: this.registerForm.value.locality,
      city: this.registerForm.value.city,
      state: this.registerForm.value.state,
      zipcode: this.registerForm.value.zipcode
    }
    let user: User = {
      userName: this.registerForm.value.userName,
      mailId: this.registerForm.value.mailId,
      userPassword: this.registerForm.value.password,
      mobileNumber: this.registerForm.value.mobileNumber,
      address: address,
      role: {
        roleId: 2,
        roleName: "USER"
      }
    }    
    this.auth.register(user).subscribe((data) => {
      this.Toast.fire({ icon: 'success',title: 'Welcome '+data.userName }) 
      localStorage.setItem("user", JSON.stringify(data).toString())
      this.router.navigate(['/HomePage'])
    }, (response) => {
      Swal.fire('Error!', response.error.message, 'error')
    })
  }
  else{
    alert("Please Confirm Your Password...")
  }
}

}
  
