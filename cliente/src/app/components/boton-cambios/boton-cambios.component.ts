import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boton-cambios',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './boton-cambios.component.html',
  styleUrl: './boton-cambios.component.css'
})
export class BotonCambiosComponent {
  isOpen = false;
  @Input()
  icono:string=""

  @Output() colsChange = new EventEmitter<number>(); // Declara el evento de salida
  openPicker() {
    this.isOpen =  !this.isOpen;
    
  }

  closePicker() {
    this.isOpen = false;
  }
  // Método que se llama al cambiar el slider
  onOrdenChange(event: any) {
   
  }

 
  confirmValue() {

    this.isOpen = false;
  }

  cancelValueSelection() {
    this.isOpen = false;
  }
}
