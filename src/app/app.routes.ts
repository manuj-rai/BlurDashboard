<<<<<<< HEAD
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
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
>>>>>>> 9ed240678e279fddec5fe3b25db25c6590c220f1
export class AppRoutingModule {}