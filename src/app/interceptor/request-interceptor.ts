import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const rapidApiKey = '605ddffaacmsh6ca5e304e439955p10989ajsn80f49a3f1b7e';
    const rapidAPiHost = 'covid-19-data.p.rapidapi.com';
    const headers = {'x-rapidapi-key': rapidApiKey,'x-rapidapi-host':rapidAPiHost }
    return next.handle(httpRequest.clone({ setHeaders: headers }));
  }
}
