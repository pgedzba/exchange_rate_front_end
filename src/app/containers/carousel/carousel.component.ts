import { Component, OnInit } from '@angular/core';
import { SlideData } from 'src/app/models/SlideData';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public carouselData: Array<SlideData>;
  public activeSlide: number = 0;

  constructor(private exchangeRatesService: ExchangeRatesService) {
    this.carouselData = new Array();
    this.carouselData.push({
      base: 'GBP',
      goal: 'EUR',
      img: 'https://images.unsplash.com/photo-1560452992-e3c28ffc6432?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80'
    });
    this.carouselData.push({
      base: 'CHF',
      goal: 'USD',
      img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
      
    });
    this.carouselData.push({
      base: 'USD',
      goal: 'GBP',
      img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1375&q=80'
    });
  }

  ngOnInit() {
    this.carouselData.forEach(slideData => {
      this.exchangeRatesService.getExchangeRate(slideData.base, slideData.goal).subscribe(
        data => {
          slideData.value = data.rates[slideData.goal];
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  previousSlide() {
    this.activeSlide--;
    if ( this.activeSlide < 0 ) this.activeSlide = this.carouselData.length-1;
    this.refreshData(this.activeSlide);
  }

  nextSlide() {
    this.activeSlide++;
    if ( this.activeSlide > this.carouselData.length-1 ) this.activeSlide = 0;
    this.refreshData(this.activeSlide);
  }

  changeSlide(newSlide: number) {
    this.activeSlide = newSlide;
    this.refreshData(this.activeSlide);
  }

  refreshData(index) {
    this.exchangeRatesService.getExchangeRate(this.carouselData[index].base, this.carouselData[index].goal).subscribe(
      data => {
        this.carouselData[index].value = data.rates[this.carouselData[index].goal];
      },
      error => {
        console.log(error);
      }
    );
  }

}
