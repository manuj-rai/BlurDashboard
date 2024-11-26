import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // Only import CommonModule
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { WidgetComponent } from './widget/widget.component';
import { TestModule } from './test/test.module';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [], 
  imports: [
    BrowserModule,
    CommonModule,  
    AppRoutingModule,
    WeatherComponent,
    DashboardComponent,
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TodoComponent,
    WidgetComponent,
    RouterOutlet,
    TestModule,
    HttpClientModule,
    NewsComponent,
    FormsModule,
  ],
  providers: [DatePipe],  
  bootstrap: [],  
})
export class AppModule {}


