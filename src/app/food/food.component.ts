import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  searchedValue:String;
  constructor(private route : ActivatedRoute) { }
 
  ngOnInit() {
    this.route.paramMap.subscribe(element => {
      console.log(element);
      this.searchedValue = JSON.parse(JSON.stringify(element)).params.searchedValue;
      console.log(this.searchedValue);
    })

    console.log("Hello")

  }
}
