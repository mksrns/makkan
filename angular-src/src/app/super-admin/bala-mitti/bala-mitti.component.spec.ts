import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalaMittiComponent } from './bala-mitti.component';

describe('BalaMittiComponent', () => {
  let component: BalaMittiComponent;
  let fixture: ComponentFixture<BalaMittiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalaMittiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalaMittiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
