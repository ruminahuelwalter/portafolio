import { Component, Output, EventEmitter  } from '@angular/core';
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
  @Output() colsChange = new EventEmitter<number>();

  // Simula el cambio de valor. Por ejemplo, puede ser el valor de un slider
  onSliderChange(value: number) {
    this.colsChange.emit(value); // Emite el nuevo valor de columnas
  }
}
