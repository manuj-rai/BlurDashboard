
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';
import { ComponentsComponent } from './components/components.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'charts', component: ChartComponent },
    { path: 'maps', component: MapComponent },
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
