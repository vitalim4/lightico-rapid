import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchCountry(){
    if(this.searchValue){
      this.router.navigate(['/search/result', this.searchValue]);
    }
    else{return;}
    
  }

}
