import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ColorSwatchesModule } from 'ngx-color/swatches';

@Component({
  selector: 'app-color-picker-card',
  standalone: true,
  imports: [
    ColorSwatchesModule,
    NgIf
  ],
  templateUrl: './color-picker-card.component.html',
  styleUrl: './color-picker-card.component.css'
})
export class ColorPickerCardComponent {
  @Output() colorSelected = new EventEmitter<string>();
  isOpen = false;

  
  title = 'app';
  primaryColor = '';
  resetColor = '#fbc02d'; // Color definido anteriormente
  state = {
    h: 150,
    s: 0.50,
    l: 0.20,
    a: 1,
  }

  openPicker() {
    this.isOpen = !this.isOpen;

  }

  closePicker() {
    this.isOpen = false;
  }

  confirmColor() {
    this.colorSelected.emit(this.primaryColor);
    this.closePicker();
  }

  cancelColorSelection() {
    this.colorSelected.emit(this.resetColor);
    this.closePicker();
  }
  
  changeComplete($event: ColorEvent): void {
    this.state = $event.color.hsl;
    this.primaryColor = $event.color.hex;
    this.colorSelected.emit(this.primaryColor);

  }
}
