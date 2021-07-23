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
  constructor(private activatedRoute:ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe(params => { 
       this.countryParam = params.get('country'); 
       this.countriesService.getCountryByName(this.countryParam).subscribe((data: Country[])=>{
        this.countries = data;
      }); 
   });
  }
 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
