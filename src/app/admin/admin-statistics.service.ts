import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { GETSTATISTICSCOUNT,GETTOPTENFOOD,GETTOPFIVEERESTAURANT,GETLEASTFIVEERESTAURANT} from 'app/public-api';
@Injectable({
  providedIn: 'root'
})
export class AdminStatisticsService {

  constructor(private http:HttpClient) { }
  fetchStatisticsCount()
  {
    return this.http.get(GETSTATISTICSCOUNT);
  }
  fetchTopTenFood(){
    return this.http.get(GETTOPTENFOOD);
  }
  fetchTopFiveRestaurant(){
    return this.http.get(GETTOPFIVEERESTAURANT);
  }
  fetchLeastFiveRestaurant(){
    return this.http.get(GETLEASTFIVEERESTAURANT);
  }

}
