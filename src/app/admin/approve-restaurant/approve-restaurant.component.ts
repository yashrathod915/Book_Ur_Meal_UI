import { Restaurant } from 'app/core/Restaurant';
import { AdminService } from './../admin-service/admin.service';
import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-approve-restaurant',
  templateUrl: './approve-restaurant.component.html',
  styleUrls: ['./approve-restaurant.component.scss']
})
export class ApproveRestaurantComponent implements OnInit {
  restaurant: Restaurant[] = [];
  dataReceived: boolean;

  constructor(private adminService: AdminService) {
  }
  ngOnInit() {
    this.adminService.getAllRestaurant(1).subscribe((data) => {
      if(data.length == 0)
      this.dataReceived = false;
      else
      this.dataReceived = true;
      console.log(data);
      console.log(this.dataReceived);
      
      const dat = data;
      for (let i = 0; i < data.length; i++) {
        let rest: Restaurant = {
          restaurantId: dat[i].restaurantId,
          restaurantName: dat[i].restaurantName,
          mailId: dat[i].mailId,
          restaurantContactNumber: dat[i].restaurantContactNumber,
          restaurantStatus: dat[i].restaurantStatus,
          restaurantAddress: dat[i].restaurantAddress,
          restaurantPassword: null,
        }
        this.restaurant.push(rest);
      }
    }, (fail) => {
      console.log(fail);
    })
  }
  status(id,request) {
    this.adminService.changeStatus(id,request).subscribe((data) => {
      console.log(data);
      Swal.fire('Status',data.message,'success')
      window.location.reload();
    },(data) => {
      console.log(data);
      location.reload();
    })
  }

}
