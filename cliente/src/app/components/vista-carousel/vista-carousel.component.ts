import { Component } from '@angular/core';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-vista-carousel',
  standalone: true,
  imports: [
    PrimeNgModule
  ],
  templateUrl: './vista-carousel.component.html',
  styleUrl: './vista-carousel.component.css'
})
export class VistaCarouselComponent {

}
