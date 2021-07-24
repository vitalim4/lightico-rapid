import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularComponent } from './components/popular/popular.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule, 
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/request-interceptor';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { DateStatusComponent } from './components/date-status/date-status.component';
import { CardDateStatusComponent } from './components/date-status/card-date-status/card-date-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    FavoritesComponent,
    CardDetailComponent,
    SearchComponent,
    SearchResultComponent,
    DateStatusComponent,
    CardDateStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    MatDatepickerModule,
    MatNativeDateModule,   
    ReactiveFormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
