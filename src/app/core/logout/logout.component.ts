import  Swal  from 'sweetalert2';
import { AuthenticationService } from 'app/core/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
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
  constructor(private router:Router,private auth:AuthenticationService) {
  }
  ngOnInit() {  
    if(localStorage.getItem("user") != null){
      this.Toast.fire({
        icon: 'success',
        title: "Succesfully, Logout" 
      })
      this.router.navigate(['/HomePage'])
      window.location.reload();
    }
    this.router.navigate(['/HomePage'])
    localStorage.removeItem("restaurant"); 
    localStorage.removeItem("user"); 
    localStorage.removeItem("role")
    this.auth.signOut()
    
   
  }
 
}
