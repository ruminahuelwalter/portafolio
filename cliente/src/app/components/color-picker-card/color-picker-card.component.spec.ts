import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerCardComponent } from './color-picker-card.component';

describe('ColorPickerCardComponent', () => {
  let component: ColorPickerCardComponent;
  let fixture: ComponentFixture<ColorPickerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPickerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
