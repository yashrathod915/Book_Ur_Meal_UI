import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantAddress } from 'app/core/RestaurantAddress';
import { Restaurant } from 'app/core/Restaurant';
import { AuthenticationService } from 'app/core/authentication.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-restaurant-signup',
  templateUrl: './restaurant-signup.component.html',
  styleUrls: ['./restaurant-signup.component.scss']
})
export class RestaurantSignupComponent implements OnInit {
  restaurantForm: FormGroup;
  loginForm: FormGroup
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
  constructor(private fb: FormBuilder, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private restaurantService: AuthenticationService) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/img/examples/error-24px.svg'));
  }
  ngOnInit() {
    localStorage.removeItem("user"); 
    localStorage.removeItem("role")
    this.restaurantForm = this.fb.group({
      "restaurantName": ['', [Validators.required, Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9 ]*")]],
      "mailId": ['', [Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$")]],
      "password": ['', [Validators.required, Validators.minLength(8), Validators.pattern("^((?!.* )(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*?()]).{8,})")]],
      "confirmPassword": ['', [Validators.required, Validators.minLength(8), Validators.pattern("^((?!.* )(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*?()]).{8,})")]],
      "restaurantContactNumber": ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[6-9][0-9]*$")]],
      "doorNumber": ['', [Validators.required, Validators.pattern("[a-zA-Z0-9#][a-zA-Z0-9#',-/ ]*"),Validators.maxLength(6)]],
      "streetName": ['', [Validators.required,Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9',-/ ]*"),Validators.maxLength(15)]],
      "locality": ['', [Validators.required, Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9',-/ ]*"),Validators.maxLength(18)]],
      "city": ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*"),Validators.maxLength(18)]],
      "state": ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*"),Validators.maxLength(18)]],
      "zipcode": ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[1-9][0-9]*")]]
    });
  }

  get fval() {
    return this.restaurantForm.controls
  }
  register() {
    if (this.restaurantForm.value.password === this.restaurantForm.value.confirmPassword) {
      let address: RestaurantAddress = {
        doorNumber: this.restaurantForm.value.doorNumber,
        streetName: this.restaurantForm.value.streetName,
        locality: this.restaurantForm.value.locality,
        city: this.restaurantForm.value.city,
        state: this.restaurantForm.value.state,
        zipcode: this.restaurantForm.value.zipcode
      }

      let restauraunt: Restaurant = {
        restaurantId:0,
        restaurantStatus:0,
        restaurantName: this.restaurantForm.value.restaurantName,
        mailId: this.restaurantForm.value.mailId,
        restaurantPassword: this.restaurantForm.value.password,
        restaurantContactNumber: this.restaurantForm.value.restaurantContactNumber,
        restaurantAddress: address
      }

      this.restaurantService.registerRestaurant(restauraunt).subscribe((data) => {
        this.Toast.fire({
          icon: 'success',
          title: "Registered Successfully"
        })
        this.router.navigate(['./login']);
      }, (response) => {
        Swal.fire('', response.error.message, 'error')
      })
    }
    else {
      alert("Please Confirm Your Password...");
    }
  }
}
