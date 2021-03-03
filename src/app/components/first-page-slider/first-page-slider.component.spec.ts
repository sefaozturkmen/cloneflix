import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageSliderComponent } from './first-page-slider.component';

describe('FirstPageSliderComponent', () => {
  let component: FirstPageSliderComponent;
  let fixture: ComponentFixture<FirstPageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
