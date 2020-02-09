import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySellComponent } from './daily-sell.component';

describe('DailySellComponent', () => {
  let component: DailySellComponent;
  let fixture: ComponentFixture<DailySellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
