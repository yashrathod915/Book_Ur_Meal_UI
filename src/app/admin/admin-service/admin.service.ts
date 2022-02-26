import { GETALLRESTAURANT, CHANGERESTAURANTSTATUS } from './../../public-api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }
  getAllRestaurant(status):any{
    return  this.http.get(GETALLRESTAURANT+"?status="+status); 
  }
  changeStatus(id,request):any{
    return  this.http.post(CHANGERESTAURANTSTATUS+"?restaurantId="+id+"&request="+request,""); 
  }
}
