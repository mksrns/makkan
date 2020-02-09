import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZameenRoyaltyComponent } from './zameen-royalty.component';

describe('ZameenRoyaltyComponent', () => {
  let component: ZameenRoyaltyComponent;
  let fixture: ComponentFixture<ZameenRoyaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZameenRoyaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZameenRoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
