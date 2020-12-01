import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftEntryComponent } from './components/gift-entry/gift-entry.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GiftEntryComponent,
    GiftListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
