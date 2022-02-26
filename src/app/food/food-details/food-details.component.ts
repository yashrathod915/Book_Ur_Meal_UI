import { Spinkit } from 'ng-http-loader';
import { FETCHIMAGEURL } from 'app/public-api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FoodsearchService } from 'app/food/foodsearch.service';
import { SearchedFood } from 'app/food/SearchedFood';
import { RestaurantFood } from 'app/food/RestaurantFood';
import Swal from 'sweetalert2'
 
@Component({
 selector: 'app-food-details',
 templateUrl: './food-details.component.html',
 styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
 foodId;
 dataRecieved:Boolean = false;
 search : SearchedFood;
 restaurant:RestaurantFood;
 restaurantfoods: SearchedFood[]=[];
 spinnerStyle = Spinkit;
 constructor(private route : ActivatedRoute, private router: Router,private foodsearch:FoodsearchService) { }
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
 ngOnInit() {
 this.route.paramMap.subscribe(element => {
 // console.log(element);
 this.foodId = JSON.parse(JSON.stringify(element)).params.foodId;
 console.log(this.foodId);
 })
 this.foodsearch.getfoodbyfoodid(this.foodId).subscribe(data=>{
 // console.log(data);
 
 let str = JSON.stringify(data);
 let foodDetails = JSON.parse(str);
 this.search = {
 foodId:foodDetails.foodId,
 foodName:foodDetails.foodName,
 foodPrice:foodDetails.foodPrice,
 foodRating:foodDetails.foodRating,
 nutrientScore:foodDetails.nutrientScore,
 restaurant:foodDetails.restaurant,
 image:FETCHIMAGEURL+foodDetails.foodImage.pictureId
 }
 this.foodsearch.getrestaurantbyrestaurantid(foodDetails.restaurant.restaurantId).subscribe(data=>{
 this.dataRecieved = true; 
 this.restaurant=foodDetails.restaurant;
 })
 for(let i=0;i<foodDetails.restaurant.foods.length;i++)
 {
 let rf:SearchedFood= {
 foodId:foodDetails.restaurant.foods[i].foodId,
 foodName:foodDetails.restaurant.foods[i].foodName,
 foodPrice:foodDetails.restaurant.foods[i].foodPrice,
 foodRating:foodDetails.restaurant.foods[i].foodRating,
 nutrientScore:foodDetails.restaurant.foods[i].nutrientScore,
 restaurant:foodDetails.restaurant.foods[i].restaurant,
 image:FETCHIMAGEURL+foodDetails.restaurant.foods[i].foodImage.pictureId,
 }
 this.restaurantfoods.push(rf);
 }
 console.log(this.restaurantfoods);
 });
 
 }
 
 redirect(){
 // console.log('Here');
 this.router.navigateByUrl('/CartModule');
 }
 addtocart(foodId:number){
 let user = JSON.parse(localStorage.getItem("user"));
 if(user == null){
 Swal.fire("Please Login")
 // this.router.navigateByUrl('/HomePage'); 
 }
 else{
 let userId=user.userId;
 this.foodsearch.addfoodtocart(userId,foodId).subscribe(data => {
 console.log(data);
 this.Toast.fire({
 icon: 'success',
 title: 'added to cart'
 })
 });
 }
 }
}