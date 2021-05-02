import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GiftFeatureComponent } from './features/gift-feature/gift-feature.component';
import { MediaLibraryComponent } from './features/media-library/media-library.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'gifts',
    component: GiftFeatureComponent
  },
  {
    path: 'media-library',
    component: MediaLibraryComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
