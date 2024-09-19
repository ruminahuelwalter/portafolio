import { Component } from '@angular/core';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    PrimeNgModule
   ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
}
