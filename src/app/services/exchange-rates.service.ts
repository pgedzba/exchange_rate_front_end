import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { ExchangeRate } from '../models/ExchangeRate';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private httpClient: HttpClient) { }

  public getExchangeRate(base: string, goal: string): Observable<ExchangeRate> {
    let params: HttpParams = new HttpParams();
    params = params.append('base',base);
    params = params.append('symbols',goal);
  
    return this.httpClient.get<ExchangeRate>(environment.API_URL + '/latest', {params: params});
  }
}
