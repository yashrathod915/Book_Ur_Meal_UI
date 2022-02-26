import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './restaurant-header.component.html',
  styleUrls: ['./restaurant-header.component.scss']
})
export class RestaurantHeaderComponent implements OnInit {
restaurantname;
  constructor() { }

  onlogout(){
    localStorage.removeItem("restaurant");
    localStorage.removeItem("rest");
  }
  ngOnInit() {
    let rest = JSON.parse(localStorage.getItem("restaurant"));
    this.restaurantname=rest.restaurantName;
  }

}
