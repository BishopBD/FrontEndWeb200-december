import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
