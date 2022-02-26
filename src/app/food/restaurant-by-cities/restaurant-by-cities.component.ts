import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FoodsearchService} from 'app/food/foodsearch.service';
import { Restaurant } from 'app/food/restaurant-by-cities/RestaurantByCity';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-restaurant-by-cities',
  templateUrl: './restaurant-by-cities.component.html',
  styleUrls: ['./restaurant-by-cities.component.scss']
})
export class RestaurantByCitiesComponent implements OnInit {
  spinnerStyle = Spinkit;
   restaurantlist:Restaurant[]=[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService:FoodsearchService
  ) { }

  ngOnInit() { 
    //  this.route.paramMap.subscribe(params => {
    //   let citySearch =this
    //   console.log("come please " + citySearch);
    // })
    let citySearch=this.route.snapshot.params.city;
      this.restaurantService.fetchRestaurantByCity(citySearch).subscribe(data=>{
        console.log(data);
        let str = JSON.stringify(data);
        let restaurantDetails = JSON.parse(str);
        for(let i=0;i<restaurantDetails.length;i++)
        {
           let restaurantObj:Restaurant={
            restaurantId:restaurantDetails[i][0],
            restaurantEmail:restaurantDetails[i][1],
            restaurantContact:restaurantDetails[i][2],
            restaurantName:restaurantDetails[i][3],
            restaurantCity:restaurantDetails[i][4],
            locality:restaurantDetails[i][5],
           }
           this.restaurantlist.push(restaurantObj);  
         }
         console.log(this.restaurantlist);
        });
     
    }
   
  }