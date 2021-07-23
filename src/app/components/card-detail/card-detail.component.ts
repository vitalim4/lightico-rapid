import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input()
  country: Country | undefined;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
  }

  checkIfExistsInFavorites(){
    if(this.countriesService.getFavoriteStorage()){
      return this.countriesService.getFavoriteStorage().find(o => o.code === this.country.code); 
    }
    return false; 
  }

  formatDate(date: string){
    return date.split('T')[0];
  }

  addToFavorites(){
    this.countriesService.setFavoritesStorage(this.country);
  }

}
