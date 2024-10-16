import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCarouselComponent } from './vista-carousel.component';

describe('VistaCarouselComponent', () => {
  let component: VistaCarouselComponent;
  let fixture: ComponentFixture<VistaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
