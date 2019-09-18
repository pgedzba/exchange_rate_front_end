import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SlideComponent } from './components/slide/slide.component';
import { CarouselComponent } from './containers/carousel/carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SlideComponent,
        CarouselComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
