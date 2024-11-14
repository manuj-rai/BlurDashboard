import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  imports: [CommonModule, FormsModule]
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = 'Ahmedabad';
  isCityInputEmpty: boolean = false; // Track if city input is empty
  cityError: string = ''; // Error message for invalid city name
  apiKey: string = 'ebe4977f055defcccc75873566e531c1';
  apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    const url = `${this.apiUrl}?q=${this.city}&appid=${this.apiKey}&units=metric`;
    this.http.get(url).subscribe(
      (data: any) => {
        this.weatherData = data;
        this.cityError = ''; // Clear any previous error
      },
      (error) => {
        console.error('Error fetching weather data:', error);
        if (error.status === 404) {
          this.cityError = 'City not found. Please enter a valid city name.';
        } else {
          this.cityError = 'An error occurred. Please try again later.';
        }
      }
    );
  }

  searchCity() {
    if (this.city.trim()) {
      this.isCityInputEmpty = false;
      this.getWeatherData();
    } else {
      this.isCityInputEmpty = true;
      this.cityError = ''; // Clear previous city error when input is empty
    }
  }
}


