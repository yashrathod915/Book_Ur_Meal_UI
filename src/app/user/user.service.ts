import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { EDITUSERPROFILEURL,GETEDITUSERDETAILS} from 'app/public-api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  editUser(user){
    return this.http.post(EDITUSERPROFILEURL,user);
  }
geteditUserDetails(userId:any):Observable<Object>{
    let restuarant:string=GETEDITUSERDETAILS+"?userId="+userId;
    return this.http.get(restuarant);
}
}