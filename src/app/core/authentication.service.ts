import { REGISTERUSERURL, LOGINUSERURL, GOOGLELOGINURL, REGISTERRESTAURANTURL, LOGINRESTAURANTURL } from 'app/public-api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialLoginModule, AuthService } from 'angular4-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  TOKEN: string
  isLogged: boolean
  constructor(private http: HttpClient, private authService: AuthService) {
    this.isLogged = false
  }
  register(user: any): any {
    return this.http.post(REGISTERUSERURL, user);
  }
  login(user,password): any {
    return this.http.get(LOGINUSERURL+"?mailId="+user+"&password="+password);
  }
  signInWithGoogle() {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInGoogle(user: any) {
    return this.http.post(GOOGLELOGINURL, user);
  }
  getState(): boolean {
    console.log('get state ', this.isLogged);
    return this.isLogged;
  }
  setToken(save) {

    this.TOKEN = save

  }
  registerRestaurant(r) {
    return this.http.post(REGISTERRESTAURANTURL, r);
  }
  loginRestaurant(user,password) {
    return this.http.get(LOGINRESTAURANTURL+"?mailId="+user+"&password="+password);
  }
  setState() {
    console.log('set state !', this.isLogged);
    // this.header.status();
    this.isLogged = !this.isLogged;
  }
  signOut() {
    const response = fetch('https://accounts.google.com/o/oauth2/revoke?token=' + this.TOKEN, { method: 'POST' });
    localStorage.removeItem("rest")
    localStorage.removeItem("token")
  }
}
