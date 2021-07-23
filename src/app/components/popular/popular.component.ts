import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  countries : Country [];
  subscription: Subscription;
  private defaultCountries = ['italy','ukraine','israel','germany','poland'];
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    //this.countries = JSON.parse(localStorage.getItem('countriesData'));
    this.countries = this.countriesService.getPopularCountries();

    if(this.countries === null){
      this.countries = [];
      const endTimer = 4;
      this.subscription = timer(0, 1500).pipe(
       map(i => endTimer - i),
       takeWhile(i => i >= -1),
     ).subscribe(s => {
       if (s == 0) {
         this.subscription.unsubscribe();
       }
        this.countriesService.getCountryByName(this.defaultCountries[s]).subscribe((data: any)=>{
        this.countries.push(data[0]);
        this.countriesService.setCountryStorage(this.countries);
      });
     });

    } 
  }

}
