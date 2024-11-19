import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenarAlbumComponent } from './ordenar-album.component';

describe('OrdenarAlbumComponent', () => {
  let component: OrdenarAlbumComponent;
  let fixture: ComponentFixture<OrdenarAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenarAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
