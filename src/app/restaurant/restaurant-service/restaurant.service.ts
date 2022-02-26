import { ADDFOODURL, GETFOODSFROMRESTAURANTURL, DELETEFOODURL } from 'app/public-api';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  isLogged:boolean
  constructor(private http: HttpClient) { 
    this.isLogged=false
  }
  
  registerFood(food: Object): Observable<Object> {
    console.log("food")
    console.log(food);
    return this.http.post(ADDFOODURL,food );
  }

  displayfood(restaurantId:any): Observable<Object> {
    let uu:string=GETFOODSFROMRESTAURANTURL+"?restaurantId="+restaurantId;
    return this.http.get(uu);
  }

  deletefood(foodId:any,availibilityStatus:any): Observable<Object> {
    let vv:string=DELETEFOODURL+"?foodid="+foodId+"&availibilityStatus="+availibilityStatus;
    return this.http.get(vv);
    }
}
