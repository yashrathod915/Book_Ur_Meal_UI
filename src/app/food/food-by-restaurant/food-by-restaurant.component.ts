import { FETCHIMAGEURL } from './../../public-api';
import { FoodRestaurant } from './../FoodClass';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodsearchService } from './../foodsearch.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-food-by-restaurant',
  templateUrl: './food-by-restaurant.component.html',
  styleUrls: ['./food-by-restaurant.component.scss']
})
export class FoodByRestaurantComponent implements OnInit {
  restaurant:any;
  dataRecieved=false;
  foodsList:FoodRestaurant[]=[];
  foods:any;
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
  constructor(
    private foodsearch:FoodsearchService,
    private foodByRestaurant:FoodsearchService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  addtocart(foodId:number){
  
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("userdetail"+user);
   
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
  ngOnInit() {
    let restaurantId=this.route.snapshot.params.restaurantId;
    console.log(restaurantId);
    this.foodByRestaurant.getrestaurantbyrestaurantid(restaurantId).subscribe(data=>{
      let str = JSON.stringify(data);
      let foodByrestaurant = JSON.parse(str);
      this.restaurant=foodByrestaurant
      console.log(this.restaurant);
      console.log("hello"+foodByrestaurant.foods.length);
      for(let i=0;i<foodByrestaurant.foods.length;i++){
      if(foodByrestaurant.foods[i].foodAvailabilityStatus!=0){
      let foodObj:FoodRestaurant={
         foodId:foodByrestaurant.foods[i].foodId,
         nutrientScore:foodByrestaurant.foods[i].nutrientScore,
         foodName:foodByrestaurant.foods[i].foodName,
         foodPrice:foodByrestaurant.foods[i].foodPrice,
         foodRating:foodByrestaurant.foods[i].foodRating,
         image:FETCHIMAGEURL+foodByrestaurant.foods[i].foodImage.pictureId,
         foodAvailability:foodByrestaurant.foods[i].foodAvailabilityStatus
      }
      this.foodsList.push(foodObj);
    }
      }
      this.dataRecieved=true;
      console.log(this.foodsList);


    })
  }

}
