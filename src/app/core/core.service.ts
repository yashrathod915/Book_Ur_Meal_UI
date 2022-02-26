import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { FETCHRECOMMENDEDFOODURL, FETCHCITIESURL } from 'app/public-api';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(private http:HttpClient) { }
  fetchAllRecommenedFood()
  {
    return this.http.get(FETCHRECOMMENDEDFOODURL);
  }
  fetchAllRestaurantLocation(){
    return this.http.get(FETCHCITIESURL);
  }
}
