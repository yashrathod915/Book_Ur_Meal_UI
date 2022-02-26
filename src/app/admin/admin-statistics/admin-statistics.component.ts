import { OrdersComponent } from 'app/restaurant/orders/orders.component';
import { AdminStatisticsService } from './../admin-statistics.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-admin-statistics',
  templateUrl: './admin-statistics.component.html',
  styleUrls: ['./admin-statistics.component.scss']
})
export class AdminStatisticsComponent implements OnInit {
  foodCount:any[]=[];
  foodRestaurantname:any[]=[];
  topRestCount:any[]=[];
  topRestName:any[]=[];
  leastRestCount:any[]=[];
  leastRestName:any[]=[];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = this.topRestName;
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public polarChartLabels: Label[] =this.leastRestName;
  public polarChartType: ChartType = 'pie';
  public polarChartLegend = true;
  public polarChartPlugins = [];

  
  public foodChartLabels: Label[] = this.foodRestaurantname;
  public foodChartType: ChartType = 'bar';
  public foodChartLegend = false;
  public foodChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data:this.topRestCount, label: 'Top Restaurants'},
    
   
  ];
  public leastChartData: ChartDataSets[] = [
    { data:this.leastRestCount, label: 'Series A' }
   
  ];
  public foodChart: ChartDataSets[] = [
    { data: this.foodCount, label: 'Number of Orders' }
   
  ];
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        // 'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)',
        // 'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public foodChartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(243, 154, 224, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(143, 29, 31, 0.5)',
        'rgba(40, 186, 38, 0.5)',
        'rgba(26, 81, 136, 0.5)',
        'rgba(238, 137, 21, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        // 'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba((75, 192, 192,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(243, 154, 224, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(143, 29, 31,1)',
        'rgba(40, 186, 38,1)',
        'rgba(26, 81, 136,1)',
        'rgba(238, 137, 21, 1)',
        'rgba(255, 99, 132,1)',
        // 'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];
  constructor(private adminStatisticsService:AdminStatisticsService) { }
  approvedRestaurant:any
  pendingRestaurant:any
  Orders:any
  RejectedRestaurant:any
  users:any
  totalRestaurant:any;
 
 
  ngOnInit() {
    this.adminStatisticsService.fetchStatisticsCount().subscribe(data=>{
      console.log(data);
      let str = JSON.stringify(data);
      let statistics = JSON.parse(str);
      this.approvedRestaurant=statistics.approvedRestaurant;
      this.RejectedRestaurant=statistics.rejectedRestaurant;
      this.pendingRestaurant=statistics.pendingRestaurant;
      this.Orders=statistics.orders;
      this.users=statistics.totalCustomers;
      this.totalRestaurant=statistics.totalRestaurant;
    })

    this.adminStatisticsService.fetchTopTenFood().subscribe(data=>{
      console.log(data);
      let foodRest:string;
      let str = JSON.stringify(data);
      let topFoods = JSON.parse(str);
      for(let i=0;i<topFoods.length;i++)
      {
        this.foodCount.push(topFoods[i][0]);
        foodRest=topFoods[i][1];
        this.foodRestaurantname.push(foodRest);
      }
      
      console.log(this.foodCount);
    })

    this.adminStatisticsService.fetchTopFiveRestaurant().subscribe(data=>{
      console.log(data)
      let str = JSON.stringify(data);
      let topRes = JSON.parse(str);
      for(let i=0;i<topRes.length;i++)
      {
        this.topRestCount.push(topRes[i][0]);
        this.topRestName.push(topRes[i][1]);
      }
    })

    this.adminStatisticsService.fetchLeastFiveRestaurant().subscribe(data=>{
      console.log(data);
      let str = JSON.stringify(data);
      let leastRes = JSON.parse(str);
      for(let i=0;i<leastRes.length;i++)
      {
        this.leastRestCount.push(leastRes[i][0]);
        this.leastRestName.push(leastRes[i][1]);
      }

    })
  }

}
