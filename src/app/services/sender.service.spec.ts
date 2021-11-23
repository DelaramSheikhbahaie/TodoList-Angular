import { TestBed } from '@angular/core/testing';

import { SenderService } from './sender.service';

describe('SenderService', () => {
  let service: SenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('daily list id', () => {
    expect(service.DailyListID).toBe('7f57bd2bc9259e055c44be9a');
  });

  it('compeleted list id', () => {
    expect(service.CompeletedListID).toBe('8ed2864ab14f980a6b47bbb9');
  });
});
