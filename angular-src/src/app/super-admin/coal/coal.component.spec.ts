import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoalComponent } from './coal.component';

describe('CoalComponent', () => {
  let component: CoalComponent;
  let fixture: ComponentFixture<CoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
