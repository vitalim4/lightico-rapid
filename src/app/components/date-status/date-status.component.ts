import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-date-status',
  templateUrl: './date-status.component.html',
  styleUrls: ['./date-status.component.css']
})
export class DateStatusComponent implements OnInit {

  sub : Subscription;
  countryParam: string;
  country : Country;
  constructor(private activatedRoute:ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe(params => { 
      this.countryParam = params.get('country'); 
      this.countriesService.getCountryByName(this.countryParam).subscribe((data: Country[])=>{
       this.country = data[0];
     }); 
  });
  }

}
