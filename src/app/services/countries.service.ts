import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, of, Subscription, throwError, timer } from 'rxjs';
import { catchError, delay, filter, map, retry, switchMap, takeWhile } from 'rxjs/operators';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private REST_API_COUNTRY= "https://covid-19-data.p.rapidapi.com/country";


  constructor(private httpClient: HttpClient) { }

  public getCountryByName(countryName){
    const params = new HttpParams()
    .set('name', countryName);

    return this.httpClient.get<Country[]>(this.REST_API_COUNTRY, {params}).pipe(
      retry(1),
      catchError(this.handleError)
  );
  }

  setCountryStorage(countries: Country[]){
    localStorage.setItem('countriesData', JSON.stringify(countries));
  }

  setFavoritesStorage(country: Country){
    if(!this.getFavoriteStorage()){
      localStorage.setItem('favoritesData', JSON.stringify([country]));
    }
    else{
      let favListContent = [];
      favListContent =  this.getFavoriteStorage();
      favListContent.push(country)
      localStorage.setItem('favoritesData', JSON.stringify(favListContent));
    }
  }

  getFavoriteStorage(){
     return JSON.parse(localStorage.getItem('favoritesData'));
  }

  getPopularCountries(){
    return JSON.parse(localStorage.getItem('countriesData'));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
    } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
}

}
