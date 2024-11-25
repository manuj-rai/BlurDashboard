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
  declarations: [NewsComponent],  // Declare your components here
  imports: [
    BrowserModule,
    CommonModule,  // This includes all the common Angular directives like NgIf
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
    FormsModule,
  ],
  providers: [DatePipe],  // Provide DatePipe if necessary
  bootstrap: [],  // Bootstrap your root component
})
export class AppModule {}


