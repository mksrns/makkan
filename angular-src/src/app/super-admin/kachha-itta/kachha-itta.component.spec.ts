import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KachhaIttaComponent } from './kachha-itta.component';

describe('KachhaIttaComponent', () => {
  let component: KachhaIttaComponent;
  let fixture: ComponentFixture<KachhaIttaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KachhaIttaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KachhaIttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
