import { FETCHIMAGEURL } from './../public-api';
import {CartService} from 'app/cart/cart.service';
import {ftbd} from 'app/cart/ftbd';
import {Component,OnInit} from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private service: CartService) {}
  foodsAdded: any;
  foodsToBeDisplayed: ftbd[] = [];
  foodobj: ftbd;
  total: number = 0;
  userId: number;
  orderId ;
  addfood(foodId: any) {
    let fetchedFoods: any = [];
    this.total = 0;
    this.service.addfoodtocart(this.userId, foodId).subscribe(data => {
      console.log(data);
      this.total=0;
      this.foodsAdded = data;
      for (let i = 0; i < this.foodsAdded.length; i++) {
        this.foodobj = new ftbd();
        this.foodobj.foodId = this.foodsAdded[i].foodId;
        this.foodobj.foodName = this.foodsAdded[i].foodName;
        this.foodobj.foodPrice = this.foodsAdded[i].foodPrice;
        this.foodobj.restaurantName=this.foodsAdded[i].restaurantName;
        this.foodobj.foodDescription=this.foodsAdded[i].foodDescription;
        this.foodobj.imageId=this.foodsAdded[i].imageId;
        this.foodobj.amount = this.foodsAdded[i].amount;
        this.foodobj.foodTotalPrice = this.foodsAdded[i].amount * this.foodsAdded[i].foodPrice;
        this.foodobj.image=FETCHIMAGEURL+this.foodsAdded[i].imageId;
        console.log(this.foodobj);
        fetchedFoods.push(this.foodobj);
        this.total += this.foodobj.foodTotalPrice;
    }
    this.foodsToBeDisplayed=fetchedFoods;
  }, err => {
      console.log(err);
    });
  }
  removefood(foodId: any) {
    let fetchedFoods: any = [];
    this.service.removefoodfromcart(this.userId, foodId).subscribe(data => {
      this.total=0;
      console.log(data);
      this.foodsAdded = data;
      for (let i = 0; i < this.foodsAdded.length; i++) {
        this.foodobj = new ftbd();
        this.foodobj.foodId = this.foodsAdded[i].foodId;
        this.foodobj.foodName = this.foodsAdded[i].foodName;
        this.foodobj.foodPrice = this.foodsAdded[i].foodPrice;
        this.foodobj.restaurantName=this.foodsAdded[i].restaurantName;
        this.foodobj.foodDescription=this.foodsAdded[i].foodDescription;
        this.foodobj.imageId=this.foodsAdded[i].imageId;
        this.foodobj.amount = this.foodsAdded[i].amount;
        this.foodobj.foodTotalPrice = this.foodsAdded[i].amount * this.foodsAdded[i].foodPrice;
        this.foodobj.image=FETCHIMAGEURL+this.foodsAdded[i].imageId;
        console.log(this.foodobj);
        fetchedFoods.push(this.foodobj);
        this.total += this.foodobj.foodTotalPrice;
      }
      this.foodsToBeDisplayed=fetchedFoods;
    }, err => {
      console.log(err);
    });
  }
  orderFood()
  {
    console.log("order fn");
    console.log(this.foodsToBeDisplayed);
    this.service.orderfoods(this.userId,this.foodsToBeDisplayed).subscribe(
      data=>
      {
        console.log(data);
        this.orderId=data;
        Swal.fire("Success","Order placed successfully"+"Your Order Id is: "+this.orderId, "success");
      },err=>
      {
        console.log(err);
        Swal.fire("Error",err, "error");
      }
    )
  }
  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem("user"));
    this.userId = currentUser.userId;
    let fetchedFoods: any = [];
    this.service.getfoodsfromcart(this.userId).subscribe(data => {
      console.log(data);
      this.foodsAdded = data;
      for (let i = 0; i < this.foodsAdded.length; i++) {
        this.foodobj = new ftbd();
        this.foodobj.foodId = this.foodsAdded[i].foodId;
        this.foodobj.foodName = this.foodsAdded[i].foodName;
        this.foodobj.foodPrice = this.foodsAdded[i].foodPrice;
        this.foodobj.restaurantName=this.foodsAdded[i].restaurantName;
        this.foodobj.foodDescription=this.foodsAdded[i].foodDescription;
        this.foodobj.imageId=this.foodsAdded[i].imageId;
        this.foodobj.amount = this.foodsAdded[i].amount;
        this.foodobj.foodTotalPrice = this.foodsAdded[i].amount * this.foodsAdded[i].foodPrice;
        this.foodobj.image=FETCHIMAGEURL+this.foodsAdded[i].imageId;
        console.log(this.foodobj);
        this.foodsToBeDisplayed.push(this.foodobj);
        this.total += this.foodobj.foodTotalPrice;
      }
      console.log(this.foodsToBeDisplayed);
    });
  }
}