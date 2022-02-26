import { ORDERFOODURL } from './../public-api';
import { ADDTOCARTURL,REMOVEFROMCARTURL,GETFOODFROMCARTURL } from 'app/public-api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  addfoodtocart(userId,foodId)
  {
    return this.http.post(ADDTOCARTURL+"?userid="+userId+"&foodid="+foodId,{});
  }
  removefoodfromcart(userId,foodId)
  {
    return this.http.post(REMOVEFROMCARTURL+"?userid="+userId+"&foodid="+foodId,{});
  }
  getfoodsfromcart(userId)
  {
    return this.http.get(GETFOODFROMCARTURL+"?userid="+userId);
  }
  orderfoods(userId, foodsOrdered)
  {
    return this.http.post(ORDERFOODURL+"?userid="+userId,foodsOrdered);
  }
}