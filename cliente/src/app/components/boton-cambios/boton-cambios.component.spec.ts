import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCambiosComponent } from './boton-cambios.component';

describe('BotonCambiosComponent', () => {
  let component: BotonCambiosComponent;
  let fixture: ComponentFixture<BotonCambiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonCambiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonCambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
