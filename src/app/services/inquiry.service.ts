import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inquiry } from '../models/inquiry'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private jsonUrl = 'public/inquiries.json'; // JSON file path based on your project structure

  constructor(private http: HttpClient) {}

  getInquiries(): Observable<Inquiry[]> {
    return this.http.get<Inquiry[]>(this.jsonUrl);
  }
}
