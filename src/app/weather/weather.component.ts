import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  imports: [CommonModule, FormsModule] // Import CommonModule and FormsModule
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = 'Pune';  // Default city
  apiKey: string = 'ebe4977f055defcccc75873566e531c1';  // Replace with your OpenWeatherMap API key
  apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWeatherData();  // Fetch weather data on component initialization
  }

  getWeatherData() {
    const url = `${this.apiUrl}?q=${this.city}&appid=${this.apiKey}&units=metric`;
    this.http.get(url).subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log(this.weatherData);  // Check the response structure in the console
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

  // Update the city and fetch new data
  searchCity() {
    this.getWeatherData();
  }
}

