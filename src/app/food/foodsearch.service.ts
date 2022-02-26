import { GETALLFOODSURL, ADDTOCARTURL, FETCHBYCITYURL,GETRESTAURANTBYIDURL,SEARCHKEYWORDURL, GETFOODBYIDURL } from 'app/public-api';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class FoodsearchService {

  constructor(private http:HttpClient) { }

  getallfoods():any{
     console.log("API");
     
    return this.http.get(GETALLFOODSURL);
  }

  addfoodtocart(userId,foodId)
  {
    return this.http.post(ADDTOCARTURL+"?userid="+userId+"&foodid="+foodId,{});
  }

  getfoodbyfoodid(foodId:any): Observable<Object> {
    let food:string=GETFOODBYIDURL+"?foodId="+foodId;
    return this.http.get(food);
  }
  getrestaurantbyrestaurantid(restaurantId:any): Observable<Object> {
    let restuarant:string=GETRESTAURANTBYIDURL+"?restaurantId="+restaurantId;
    return this.http.get(restuarant);
  }

 fetchRestaurantByCity(city:any):any{
   console.log(city);
   return this.http.get(FETCHBYCITYURL+"?city="+city);
 }
 searchbykeyword(searchedkeyword:String ):any{ 
  return this.http.get(SEARCHKEYWORDURL+"?searchedfood="+searchedkeyword);
 }

}


