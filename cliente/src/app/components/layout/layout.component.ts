import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FotoPerfilComponent } from "../foto-perfil/foto-perfil.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ FotoPerfilComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  xOffset = '100px';
  yOffset = '80px';
  
  position: string = 'center';

}
