import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverImgComponent } from './mover-img.component';

describe('MoverImgComponent', () => {
  let component: MoverImgComponent;
  let fixture: ComponentFixture<MoverImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoverImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoverImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
