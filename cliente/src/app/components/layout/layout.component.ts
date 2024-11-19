import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FotoPerfilComponent } from "../foto-perfil/foto-perfil.component";
import { ColorPickerCardComponent } from "../color-picker-card/color-picker-card.component";
import { TextoPresentacionComponent } from "../texto-presentacion/texto-presentacion.component";
import { ConfiguracionesAlbumComponent } from "../configuraciones-album/configuraciones-album.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FotoPerfilComponent, ColorPickerCardComponent, TextoPresentacionComponent, ConfiguracionesAlbumComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  @Input() 
  backgroundColor: string = '#ffd54f';
  @Input()
  onColorChange($event: string) {
    this.backgroundColor = $event;
    console.log('llego: ', $event)
  }

/*   xOffset = '100px';
  yOffset = '80px';
  
  position: string = 'center';
 */
}
