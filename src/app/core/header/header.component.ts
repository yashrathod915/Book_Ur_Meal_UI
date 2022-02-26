import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'app/core/core.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  location:any[]=[]
  searchedValue:String;
  isLogged: boolean;
  dataRecieved:Boolean=false;
  userName:string="";
  constructor(private _auth:AuthenticationService,
    private coreService:CoreService,
    private route: ActivatedRoute, private router: Router) { 
   
    this.isLogged=_auth.getState();
  }

  routeTo(e) {
    console.log('something change')
    this.router.navigate(['/restaurantBycity/' + e]);
  }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem("user"));
    this.userName=currentUser.userName;
    console.log(this.userName);
    this.coreService.fetchAllRestaurantLocation().subscribe(data=>{
      // console.log(data);
      let location=JSON.stringify(data);
      let showLocation=JSON.parse(location);
      for(let i=0;i<showLocation.length;i++)
      {
        this.location.push(showLocation[i]);
      }
      console.log(this.location);
      this.dataRecieved=true;
    })
  }
  check():boolean{
    if(localStorage.getItem("user")==null)
     return true
      else
     return false
  }

  submit(){
    alert("Helllo")
  }
  
}
