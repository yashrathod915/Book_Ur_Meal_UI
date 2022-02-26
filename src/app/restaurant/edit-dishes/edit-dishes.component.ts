import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurant/restaurant-service/restaurant.service';
import { Spinkit, NgHttpLoaderModule } from 'ng-http-loader';
@Component({
 selector: 'app-edit-dishes',
 templateUrl: './edit-dishes.component.html',
 styleUrls: ['./edit-dishes.component.scss']
})
export class EditDishesComponent implements OnInit {
 spinnerStyle = Spinkit;
 
 constructor(private addfoodservice: RestaurantService) { }
 storedData : any[]=[];
 ngOnInit() {
 let rest = JSON.parse(localStorage.getItem("restaurant"));
 this.addfoodservice.displayfood(rest.restaurantId)
 .subscribe(data => {
 let str = JSON.stringify(data)
 let foods = JSON.parse(str)
 for(let i =0;i< foods.length;i++){
 this.storedData.push(foods[i]);
 }
 
 console.log(this.storedData);
 // this.onDelete();
 }, error => {
 console.log(error)
 });
 
 }
 deleteFood(foodid,availibilityStatus) {
 
 this.addfoodservice.deletefood(foodid,availibilityStatus)
 .subscribe( data => {
 let str = JSON.stringify(data)
 let foods = JSON.parse(str)
 for(let i =0;i< foods.length;i++){
 this.storedData.push(foods[i]);
 }
 console.log(this.storedData);
 }, error => {
 console.log(error)
 });
 window.location.reload();
 }
}