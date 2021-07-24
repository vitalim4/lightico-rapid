import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country, StatusDate } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-card-date-status',
  templateUrl: './card-date-status.component.html',
  styleUrls: ['./card-date-status.component.css']
})
export class CardDateStatusComponent implements OnInit {

  @Input()
  country: Country ;
  dateChange: any;
  minDate: Date;
  maxDate: Date;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  sub: Subscription;
  constructor(private countriesService: CountriesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 1, 0, 1);
    this.maxDate = new Date();
    this.country = {} as Country;
  }

  OnDateChange(event): void {
    this.dateChange = event; 
    const year = this.dateChange.getFullYear();
    const month = this.dateChange.getMonth() < 10 ? '0'+ (this.dateChange.getMonth()+1) : this.dateChange.getMonth()+1;
    const day =  this.dateChange.getDate() < 10 ? '0'+ this.dateChange.getDate(): this.dateChange.getDate();
    const fullDate = year + "-" + day + "-" + month; 

    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      const countryName = params.get('country');
      this.countriesService.getCountryByStatusDate(countryName,fullDate).subscribe((data: StatusDate)=>{
        const provinces = data[0]["provinces"][0];

        this.country.country = provinces["country"] ? provinces["country"]  : 'No data';
        this.country.deaths = provinces["deaths"]? provinces["deaths"]  : 'No data';
        this.country.confirmed = provinces["confirmed"]? provinces["confirmed"]  : 'No data';
        this.country.recovered = provinces["recovered"]? provinces["recovered"]  : 'No data';
    
        });
     })
    
  }
  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

}
