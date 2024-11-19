import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card'
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule, MatSliderModule, MatCardModule,NgIf],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  isOpen = false;
  disabled = false;
  max = 5;
  min = 2;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  @Output() colsChange = new EventEmitter<number>(); // Declara el evento de salida
  openPicker() {
    this.isOpen =  !this.isOpen;
    
  }

  closePicker() {
    this.isOpen = false;
  }
  // Método que se llama al cambiar el slider
  onSliderChange(event: any) {
    const newValue = event; // Extrae el valor del evento
    console.log('Slider value before emit:', newValue)
    this.colsChange.emit(newValue); // Emite el nuevo valor
  }

 
  confirmValue() {
    console.log("Selected value:", this.value);
    this.isOpen = false;
  }

  cancelValueSelection() {
    this.colsChange.emit(2);
    this.min=2
    this.value=0
    this.isOpen = false;
  }
  }




