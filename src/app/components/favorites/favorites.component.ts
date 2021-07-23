import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  countries: Country[];
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countries = this.countriesService.getFavoriteStorage();
  }

  checkIfExistsInFavorites(country){
    if(this.countriesService.getFavoriteStorage()){
      return this.countriesService.getFavoriteStorage().find(o => o.code === country.code); 
    }
    return false;
  }

}
