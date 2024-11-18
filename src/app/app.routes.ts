
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'charts', component: ChartComponent },
    { path: 'maps', component: MapComponent },
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
