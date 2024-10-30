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
  selectedColor = '#ffffff';

  
  title = 'app';
  primaryColor = '#194D33';
  state = {
    h: 150,
    s: 0.50,
    l: 0.20,
    a: 1,
  }

  openPicker() {
    this.isOpen = true;
  }

  closePicker() {
    this.isOpen = false;
  }

  confirmColor() {
    this.colorSelected.emit(this.selectedColor);
    this.closePicker();
  }


  
  changeComplete($event: ColorEvent): void {
    this.state = $event.color.hsl;
    this.primaryColor = $event.color.hex;
    console.log('changeComplete', $event);
  }
}
