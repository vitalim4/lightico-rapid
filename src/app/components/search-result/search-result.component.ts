import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  sub : Subscription;
  countryParam: string;
  countries : Country [];
  countryNotFound: boolean;
  spinner: boolean;
  constructor(private activatedRoute:ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit() {
    this.spinner = true;
    this.countryNotFound = false;
    this.sub = this.activatedRoute.paramMap.subscribe(params => { 
       this.countryParam = params.get('country'); 
       this.countriesService.getCountryByName(this.countryParam).subscribe((data: Country[])=>{
        this.countries = data;
        if(data.length == 0){
          this.countryNotFound = true;
          this.spinner = false;
        }
        else{
          this.countryNotFound = false;
          this.spinner = false;
        }
      }); 
   });
  }
 
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.countryNotFound = false;
    this.spinner = false;
  }


}
