import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideComponent } from './components/slide/slide.component';
import { CarouselComponent } from './containers/carousel/carousel.component';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ExchangeRatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
