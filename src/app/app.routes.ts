
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';
import { ComponentsComponent } from './components/components.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TestUserComponent } from './test/test-user/test-user.component';
import { NewsComponent } from './news/news.component';
import { TestModule } from './test/test.module';



export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'charts', component: ChartComponent },
    { path: 'news', component: NewsComponent },
    { path: 'tables', component: ComponentsComponent },
    { path: 'maps', component: MapComponent },
    { path: 'pages', component: TestUserComponent },
    { path: 'menuLevel1', component: UserFormComponent },

];

NgModule({
  imports: [RouterModule.forRoot(routes), TestModule],
  exports: [RouterModule]
})
