import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://localhost:7158/GetActiveNews';

  constructor(private http: HttpClient) {
    console.log(this.http);
   }

  getActiveNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
