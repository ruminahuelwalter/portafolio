import { Component } from '@angular/core';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { FotoPerfilComponent } from "../../components/foto-perfil/foto-perfil.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    PrimeNgModule,
    FotoPerfilComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
}
