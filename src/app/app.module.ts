import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CounterComponent } from './components/counter/counter.component';
import { NavComponent } from './components/nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CountByComponent } from './components/count-by/count-by.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { GiftFeatureModule } from './features/gift-feature/gift-feature.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CounterComponent,
    NavComponent,
    CountByComponent
  ],
  imports: [
    BrowserModule,
    GiftFeatureModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
