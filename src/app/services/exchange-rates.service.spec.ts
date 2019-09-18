import { TestBed } from '@angular/core/testing';

import { ExchangeRatesService } from './exchange-rates.service';
import { HttpClientModule } from '@angular/common/http';

describe('ExchangeRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
    ],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: ExchangeRatesService = TestBed.get(ExchangeRatesService);
    expect(service).toBeTruthy();
  });
});
