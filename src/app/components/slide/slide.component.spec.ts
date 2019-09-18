import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideComponent } from './slide.component';

describe('SlideComponent', () => {
  let component: SlideComponent;
  let fixture: ComponentFixture<SlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideComponent);
    component = fixture.componentInstance;
    component.slideData =
      {
        base: 'GBP',
        goal: 'EUR',
        img: 'https://images.unsplash.com/photo-1560452992-e3c28ffc6432?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80'
      };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
