import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesAlbumComponent } from './configuraciones-album.component';

describe('ConfiguracionesAlbumComponent', () => {
  let component: ConfiguracionesAlbumComponent;
  let fixture: ComponentFixture<ConfiguracionesAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionesAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionesAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
