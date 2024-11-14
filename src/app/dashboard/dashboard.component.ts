import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inquiry } from '../inquiry.model';
import { WidgetComponent } from '../widget/widget.component';
import { ChartComponent } from '../chart/chart.component';
import { MapComponent } from '../map/map.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { TodoComponent } from '../todo/todo.component';
import { WeatherComponent } from '../weather/weather.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [WidgetComponent, ChartComponent, MapComponent, CommonModule, HttpClientModule, TodoComponent, WeatherComponent]
})
export class DashboardComponent implements OnInit {
  inquiries: Inquiry[] = [];  // Declare inquiries as an array of Inquiry objects
  pageSize: number = 5;      // Number of rows per page
  currentPage: number = 1;    // Current page
  totalPages: number = 1;     // Total pages

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch inquiries data via HttpClient
    this.http.get<Inquiry[]>('inquiries.json').subscribe(
      (data: Inquiry[]) => {
        this.inquiries = data;  // Assign the fetched data to the inquiries array
        this.totalPages = Math.ceil(this.inquiries.length / this.pageSize); // Calculate total pages
        console.log('Inquiries loaded:', this.inquiries);  // Log the data to verify it's being fetched
      },
      error => {
        console.error('Error fetching inquiries:', error);  // Handle errors
      }
    );
  }

  // Get paginated inquiries based on the current page
  get paginatedInquiries(): Inquiry[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.inquiries.slice(startIndex, startIndex + this.pageSize);
  }

  // Go to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Go to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Go to a specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}

