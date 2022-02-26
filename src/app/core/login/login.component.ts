import { AdminModule } from './../../admin/admin.module';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'app/core/User';
import Swal from 'sweetalert2'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SocialUser } from 'angular4-social-login';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  spinnerStyle = Spinkit;
  social: SocialUser;
  userForm: FormGroup
  restaurantForm: FormGroup
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
  constructor(private router: Router,
    private Fb: FormBuilder,
    private auth: AuthenticationService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'error-24px',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/img/examples/error-24px.svg'));
  }
  ngOnInit() {
    this.userForm = this.Fb.group({
      "mailId": ['', [Validators.required, Validators.email]],
      "userPassword": ['', [Validators.required, Validators.minLength(8)]],
    });
    this.restaurantForm = this.Fb.group({
      "mailId": ['', [Validators.required, Validators.email]],
      "restaurantPassword": ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  get fval() {
    return this.userForm.controls;
  }
  get fval1() {
    return this.restaurantForm.controls;
  }
  loginUser() {
    this.auth.login(this.userForm.value.mailId, this.userForm.value.userPassword).subscribe((data) => {
      let r = JSON.stringify(data).toString();
      console.log(r);
      if (data.role.roleId == 2) {
        console.log(data.role.roleId);
        localStorage.setItem("user", JSON.stringify(data).toString())
        localStorage.setItem("role", JSON.stringify(data.role).toString())
        this.Toast.fire({
          icon: 'success',
          title: 'Welcome Back, ' + data.userName
        })
        this.router.navigate(['/HomePage'])
      } else if (data.role.roleId == 1) {
        console.log(data.role.roleId);
        localStorage.setItem("admin", JSON.stringify(data).toString())
        localStorage.setItem("role", JSON.stringify(data.role).toString())
        this.router.navigate(['AdminModule/adminStatics'])
      }
    }, (fail) => {
      Swal.fire('', fail.error.message, 'error')
    })
  }

  socialUser() {
    this.auth.signInWithGoogle().then((userData) => {
      this.social = userData
      let user: User = {
        userName: userData.name,
        mailId: userData.email,
        userPassword: null,
        address: null,
        mobileNumber: null,
        role: { roleId: 2, roleName: "USER" }
      }
      this.auth.signInGoogle(user).subscribe((data) => {
        localStorage.setItem("user", JSON.stringify(data).toString())
        this.Toast.fire({
          icon: 'success',
          title: 'Welcome Back, ' + this.social.name
        })
        this.router.navigate(['/HomePage'])
      }, (fail) => {
        Swal.fire('', fail.error.message, 'error')
      })
    });
  }

  restaurantLogin() {
    this.auth.loginRestaurant(this.restaurantForm.value.mailId, this.restaurantForm.value.restaurantPassword).subscribe((data) => {
      let str = JSON.stringify(data)
      let daata = JSON.parse(str)
      console.log(daata);
      
      let rest = {
        type: "restrauntlogin"
      }
      localStorage.setItem("restaurant", JSON.stringify(data).toString())
      localStorage.setItem("rest", JSON.stringify(rest));
      this.Toast.fire({
        icon: 'success',
        title: 'Welcome Back, ' + daata.restaurantName
      })
      this.router.navigate(['./Restaurant']);
    }, (fail) => {
      Swal.fire('', fail.error.message, 'warning')
    })
  }
}
