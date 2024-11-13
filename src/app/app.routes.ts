
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'charts', component: ChartComponent },
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
