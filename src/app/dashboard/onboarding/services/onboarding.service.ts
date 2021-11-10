import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  private BaseApiUrl = "https://api.dev.kychub.com/v2/aml/search";

  constructor(
    private http: HttpClient,
  ) { }


  public getOnboardingData(userDetails): Observable<any> {
    const token = '33bfc416-73a2-40f2-90df-0b66455b47d4';
    // const data = {
    //   "size": 10,
    //   "page": 0,
    //   "searchType": "FUZZY",
    //   "name": ["Sabtina Ltd"],
    //   "country": [],
    //   "source": [],
    //   "guid": "",
    //   "category": [],
    //   "gender": [],
    //   "type": ["Organisation"]
    // };
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    const url = new URL(`${this.BaseApiUrl}`);
    return this.http.post<any[]>(url.href, userDetails, { 'headers': headers }).pipe(retry(2));
  }



}
