import { Component, OnInit } from '@angular/core';
import {CoreService} from  'app/core/core.service';
import {RecommendedFood} from 'app/core/homepage/RecommendedFood';
import { Spinkit } from 'ng-http-loader';
import { FETCHIMAGEURL } from 'app/public-api';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  spinnerStyle = Spinkit;
   recommendedFood:RecommendedFood[]=[]
   location:any[]=[]
   constructor(private coreService:CoreService) { }
   ngOnInit() { 
    // this.coreService.fetchAllRecommenedFood().subscribe(data=>{
    //   console.log("RecoProp"+ data);
    //   let str = JSON.stringify(data);
    //   let foodDetails = JSON.parse(str);
    //   console.log(data);
    //   for(let i=0;i<foodDetails.length;i++)
    //   {
        
    //       let recommend : RecommendedFood = {
    //         foodId:foodDetails[i][0],
    //         foodName:foodDetails[i][1],
    //         foodPrice:foodDetails[i][2],
    //         restaurant:foodDetails[i][3],
    //         image:FETCHIMAGEURL+foodDetails[i][4]
    //     }
    //     this.recommendedFood.push(recommend);
    //     console.log(recommend);
    //   }
    // })
    //   this.coreService.fetchAllRestaurantLocation().subscribe(data=>{
    //   let location=JSON.stringify(data);
    //   let showLocation=JSON.parse(location);
    //   for(let i=0;i<showLocation.length;i++)
    //   {
    //     this.location.push(showLocation[i]);
    //   }
    //   // console.log(this.location);
    // })


   
  }

}
