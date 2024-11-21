
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';
import { ComponentsComponent } from './components/components.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'charts', component: ChartComponent },
    { path: 'features', component: ChartComponent },
    { path: 'tables', component: MapComponent },
    { path: 'maps', component: MapComponent },
    { path: 'pages', component: MapComponent },
    { path: 'menuLevel1', component: UserFormComponent },

];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
