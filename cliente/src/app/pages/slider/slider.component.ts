import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card'
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule,MatSliderModule, MatCardModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  disabled = false;
  max = 5;
  min = 2;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 1;
  @Output() colsChange = new EventEmitter<number>(); // Declara el evento de salida

  // Método que se llama al cambiar el slider
  onSliderChange(event: any) {
    const newValue = event; // Extrae el valor del evento
    console.log('Slider value before emit:', newValue)
    this.colsChange.emit(newValue); // Emite el nuevo valor
  }
}
