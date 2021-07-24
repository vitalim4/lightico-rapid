import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, of, Subscription, throwError, timer } from 'rxjs';
import { catchError, delay, filter, map, retry, switchMap, takeWhile } from 'rxjs/operators';
import { Country, StatusDate } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private BASE_API = "https://covid-19-data.p.rapidapi.com";
  
  constructor(private httpClient: HttpClient) { }

  getCountryByName(countryName){
    const params = new HttpParams()
    .set('name', countryName);

    return this.httpClient.get<Country[]>(this.BASE_API + "/country", {params}).pipe(
      catchError(this.handleError)
    );
  }

  getCountryByStatusDate(countryName: string, date: string){
    const params = new HttpParams()
    .set('name', countryName)
    .set('date', date);

    return this.httpClient.get<StatusDate>(this.BASE_API + "/report/country/name", {params}).pipe(
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
