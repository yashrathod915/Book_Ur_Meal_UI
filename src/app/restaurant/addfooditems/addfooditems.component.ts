import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators,FormControl } from '@angular/forms';
import { food } from 'app/restaurant/food';
import { ingrediant } from 'app/restaurant/ingrediant';
import { restaurantdetails } from 'app/restaurant/restaurantdetails';
import { HttpClient } from '@angular/common/http';
import { image } from 'app/restaurant/image';
import { RestaurantService } from 'app/restaurant/restaurant-service/restaurant.service';
import { Spinkit } from 'ng-http-loader';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-addfooditems',
  templateUrl: './addfooditems.component.html',
  styleUrls: ['./addfooditems.component.scss']
})
export class AddfooditemsComponent implements OnInit {
  spinnerStyle = Spinkit;
  imageURL: string;
  myForm: FormGroup;
  FormData: FormGroup;
  str : any;

  constructor(private fb: FormBuilder,private router:Router, private http: HttpClient, private addfoodservice: RestaurantService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      foodName: ['', Validators.required],
      foodQuantity: ['', Validators.required],
      foodDescription: [''],
      foodPrice: ['', Validators.required],
      foodAvailabilityStatus: ['', Validators.required],
      ingredients: this.fb.array([]),
      image: ['',[Validators.required, this.requiredFileType('png','jpg')]
     
     ],
    })
    console.log(localStorage.getItem("restaurant"));
    let rest = JSON.parse(localStorage.getItem("restaurant"));
    console.log(rest.restaurantId);
   
  }

  get f() {
    return this.myForm.controls;
  }

  requiredFileType( type: string, type1: string ) {
    return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
    const extension = file.name.split('.')[1].toLowerCase();
    console.log(extension);
    if ( type.toLowerCase() !== extension.toLowerCase() && type1.toLowerCase() !== extension.toLowerCase()) {
    
    return {
    requiredFileType: true
    };
    }
    
    return null;
    }
    
    return null;
    };
    }
  get IngredientsForms() {
    return this.myForm.get('ingredients') as FormArray
  }

  addIngredient() {

    const ingredient = this.fb.group({
      ingredientName: [],
      ingredientQuantity: [],

    })

    this.IngredientsForms.push(ingredient);

  }

  deleteIngredient(i) {
    this.IngredientsForms.removeAt(i)
  }

  //  Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      image: file
    });
    this.myForm.get('image').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  // Submit Form
  submit() {
    console.log(this.myForm.value)
  }
  storedData: any;
  errorMessage;
  onSubmit() {
    console.log(this.myForm.value);
    console.log(this.myForm.value.image);
    var newimage: image = new image();
    var formData = new FormData();
    formData.append("file", this.myForm.value.image);
    this.http.post("https://bookyourmeal-api-dev.azurewebsites.net/uploadFile", formData)
      .subscribe(data => {
        let str = JSON.stringify(data)
        let saved = JSON.parse(str)
        let image1: image = {
          pictureId: saved.fileDownloadUri.split("/")[4],
          fileName: saved.fileName,
          fileType: saved.fileType,
        }
        newimage = image1;
        console.log("newimage", newimage);

      }, error => {
        console.log(error)
      });
     
    let newfood: food = new food();
    var newrestaurant: restaurantdetails = new restaurantdetails();
    let ingrediantlist: Array<ingrediant> = [];
    // var newimage: image = new image();
    setTimeout(() => {

      newfood.foodName = this.myForm.value.foodName;
      newfood.foodDescription = this.myForm.value.foodDescription;
      newfood.foodPrice = this.myForm.value.foodPrice;
      newfood.foodQuantity = this.myForm.value.foodQuantity;
      newfood.foodAvailabilityStatus = this.myForm.value.foodAvailabilityStatus;
      newfood.foodDescription = this.myForm.value.foodDescription;

      let rest = JSON.parse(localStorage.getItem("restaurant"));
      newrestaurant.restaurantId=  rest.restaurantId; 
      newfood.restaurant = newrestaurant;
      newfood.foodImage = newimage;
      for (let jndex = 0; jndex < this.myForm.value.ingredients.length; jndex++) {

        var newingrediant: ingrediant = new ingrediant();
        newingrediant.ingredientName = this.myForm.value.ingredients[jndex].ingredientName;
        newingrediant.ingredientQuantity = this.myForm.value.ingredients[jndex].ingredientQuantity;
        ingrediantlist.push(newingrediant)
      }

      newfood.ingredients = ingrediantlist;
      console.log(newfood);
    }, 3000);

    setTimeout(() => {
      this.addfoodservice.registerFood(newfood)
        .subscribe(data => {
          this.storedData = data;
          console.log(this.storedData);
          // Swal.fire("Successfully Added")
          // window.location.reload();
          Swal.fire({
            text: "Successfully Added",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
           }).then((result) => {
            if (result.value) {
              window.location.reload();
            }
           })
        
        }, error => {
          this.errorMessage = error;
          console.log(error)
          Swal.fire(error.error.message)
        });
    }, 3500);
    
  }

}
