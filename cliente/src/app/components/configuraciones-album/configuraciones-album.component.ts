
import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input,Output } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ColorSwatchesModule } from 'ngx-color/swatches';
import { ColorPickerCardComponent } from '../color-picker-card/color-picker-card.component';
import { SliderComponent } from '../../pages/slider/slider.component';
import { AlbumComponent } from '../../pages/album/album.component';//vista grild
import { OrdenarAlbumComponent } from '../ordenar-album/ordenar-album.component';
import { MoverImgComponent } from '../mover-img/mover-img.component';
import { Image } from '../../models/image';


@Component({
  selector: 'app-configuraciones-album',
  standalone: true,
  imports: [
    ColorPickerCardComponent,
    ColorSwatchesModule,
    AlbumComponent,
    SliderComponent,
    NgIf,
    OrdenarAlbumComponent,  
    MoverImgComponent],
  templateUrl: './configuraciones-album.component.html',
  styleUrl: './configuraciones-album.component.css'
})
export class ConfiguracionesAlbumComponent {
  @Output() colorSelected = new EventEmitter<string>();
  isOpen = false;
  titles:Image[]=[]
  cols=2
  title:any
  primaryColor = '';
  resetColor = '#194D33'; // Color definido anteriormente
  state = {
    h: 150,
    s: 0.50,
    l: 0.20,
    a: 1,
  }
  @Output() backgroundColorChange = new EventEmitter<string>();
  @Output() clickImg = new EventEmitter<any>();
  @Input() 
      position: string = 'relative';
  @Input() 
      size: string = '600px';
  @Input()
      onColorChange($event: string) {
        this.backgroundColor = $event;
        this.backgroundColorChange.emit(this.backgroundColor);
        console.log('llego: ', $event)
      }
  @Input() 
    backgroundColor: string = '#199D43';
    @Input() 
    background: string = '#199D43';
  

  onTitleChange(title: any) {
    this.titles = title;
  }
  openPicker() {
    this.isOpen = true;

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
  
  onImageClicked(tileData: any) {
    this.clickImg.emit(tileData)
    console.log('Imagen clickeada:', tileData);
    // Aquí puedes realizar acciones específicas cuando se hace clic en una imagen
  }

  updateCols(cols: number) {
    this.cols = cols;
  }
}
