import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSliderComponent } from './big-slider.component';

describe('BigSliderComponent', () => {
  let component: BigSliderComponent;
  let fixture: ComponentFixture<BigSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
