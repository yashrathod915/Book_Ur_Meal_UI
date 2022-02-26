import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookYourMeal';
  rest(){
    if(localStorage.getItem("rest")==null && localStorage.getItem("admin") ==null){
      return true;
    }else{
      return false;
    }
  }

  }
  

