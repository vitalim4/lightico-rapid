import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateStatusComponent } from './components/date-status/date-status.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PopularComponent } from './components/popular/popular.component';
import { SearchResultComponent } from './components/search-result/search-result.component';


const routes: Routes = [
  { path: '', redirectTo: 'popular', pathMatch: 'full'},
  { path: 'popular', component: PopularComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'search/result/:country', component: SearchResultComponent },
  { path: 'date/status/:country', component: DateStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
