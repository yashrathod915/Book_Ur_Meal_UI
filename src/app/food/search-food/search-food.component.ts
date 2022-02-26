import { Component, OnInit,OnChanges, SimpleChanges, Input } from '@angular/core';
import { FoodsearchService } from 'app/food/foodsearch.service';
import { Router} from '@angular/router';
import { SearchedFood } from 'app/food/SearchedFood';
import Swal from 'sweetalert2'
import { RestaurantFood } from 'app/food/RestaurantFood';
import { Spinkit } from 'ng-http-loader';
import { FETCHIMAGEURL } from './../../public-api';
@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss']
})

export class SearchFoodComponent implements OnChanges  {
  @Input() searchfood:String;
  recieveddata:boolean=false;
  recievedfood:boolean=false;
  recievedrestaurant:boolean=false;
  foods:any;
  r:any
  restaurants: RestaurantFood[]=[];
  uniquerestaurantids:any;
  searched: SearchedFood[]=[];
  restaurantids:Number[]=[];
  spinnerStyle = Spinkit;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    onOpen: (toast) => 
    {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  constructor(private foodsearch:FoodsearchService,private router: Router) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchfood']) {
  // ngOnInit() {
    // location.reload();
    console.log("after search")
    console.log(this.searchfood)

    
    if(this.searchfood === "undefined"){
      Swal.fire("Type the food")
      this.router.navigateByUrl('/HomePage');      
    }
    else
    {

      this.restaurants=[];
      this.searched=[];
      this.foodsearch.searchbykeyword(this.searchfood).subscribe(data=>{
        console.log(data);
        let str = JSON.stringify(data);
        let foodDetails = JSON.parse(str);
         console.log(foodDetails);
         console.log(foodDetails.foods);
        if(foodDetails.foods.length==0){
          this.recievedfood=false;
        }
        else{
         for(let i=0;i<foodDetails.foods.length;i++)
         {
           let search : SearchedFood = {
             foodId:foodDetails.foods[i].foodId,
             foodName:foodDetails.foods[i].foodName,
             foodPrice:foodDetails.foods[i].foodPrice,
             foodRating:foodDetails.foods[i].foodRating,
             nutrientScore:foodDetails.foods[i].nutrientScore,
             restaurant:foodDetails.foods[i].restaurant,
             image:FETCHIMAGEURL+foodDetails.foods[i].foodImage.pictureId,        
           } 
          this.searched.push(search);
          console.log("here it is")
          console.log(this.searched);
        }  
        if(this.searched.length>0)
        {
           this.recievedfood=true;
        }
          // this.restaurantids.push(search.restaurant.restaurantId)
    }
        if(foodDetails.restaurants.length==0){
          this.recievedrestaurant=false;
        }
        else{
         for(let i=0;i<foodDetails.restaurants.length;i++)
         {
           let restaurant : RestaurantFood = {
            restaurantId:foodDetails.restaurants[i].restaurantId,
            restaurantName:foodDetails.restaurants[i].restaurantName,
            restaurantAddress:foodDetails.restaurants[i].restaurantAddress,
            mailId:foodDetails.restaurants[i].mailId,
            restaurantContactNumber:foodDetails.restaurants[i].restaurantContactNumber,
            restaurantRating:foodDetails.restaurants[i].restaurantRating,
            foods:[],
            restaurantStatus:foodDetails.restaurants[i].restaurantStatus,
            restaurantImages:"https://bookyourmeal-api-dev.azurewebsites.net/downloadFile/"+foodDetails.restaurants[i].restaurantImages.pictureId,        
           } 
           console.log(restaurant);
          this.restaurants.push(restaurant);
          console.log("here its restaurants")
          console.log(this.restaurants);  
        }
        if(this.restaurants.length>0)
        {
          this.recievedrestaurant=true;
        }   
    }
    this.recieveddata=true;
        },err => {
        console.log(err.er);
        Swal.fire("No Result Found ")
        this.router.navigateByUrl('/HomePage');
        });
      }
    } 
  }

  redirect(){
    this.router.navigateByUrl('/CartModule');
  }
  addtocart(foodId:number){
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("userdetail "+user);
    
     if(user == null){
      Swal.fire("Please Login")
     // this.router.navigateByUrl('/HomePage'); 
    }
    else{
      let userId=user.userId;
          this.foodsearch.addfoodtocart(userId,foodId).subscribe(data => {
            console.log(data);
            this.Toast.fire({
              icon: 'success',
              title: 'added to cart'
            })
          });
      }
     }
}
