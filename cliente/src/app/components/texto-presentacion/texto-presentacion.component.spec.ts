import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPresentacionComponent } from './texto-presentacion.component';

describe('TextoPresentacionComponent', () => {
  let component: TextoPresentacionComponent;
  let fixture: ComponentFixture<TextoPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoPresentacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
