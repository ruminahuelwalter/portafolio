import { Component } from '@angular/core';
import { FotoPerfilComponent } from "../../components/foto-perfil/foto-perfil.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FotoPerfilComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
}
