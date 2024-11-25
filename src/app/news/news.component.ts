import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { DatePipe } from '@angular/common';  // Import DatePipe
import { NgModel } from '@angular/forms';
import { CommonModule } from "@angular/common";





@Component({
  selector: 'app-news',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [DatePipe,NgModel]
})
export class NewsComponent implements OnInit {
  newsList: any[] = [];

  baseImageUrl = 'http://www.local.com/NewsPortal/';

  constructor(
    private newsService: NewsService, 
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.newsService.getActiveNews().subscribe({
      next: (data) => {
        this.newsList = data;
        console.log('News fetched successfully:', data);
        // Log the date to ensure it's in the correct format
        this.newsList.forEach(news => console.log(news.postingDate));
      },
      error: (error) => {
        console.error('Error fetching news:', error);
      },
    });
  }

  getImageUrl(imagePath: string): string {
    // Strip the '~/‘ part if present and return the full image URL
    const cleanedPath = imagePath.replace('~/', '');  // Remove `~/` from the image path
    return `${this.baseImageUrl}${cleanedPath}`;  // Concatenate base path with the cleaned path
  }
}
