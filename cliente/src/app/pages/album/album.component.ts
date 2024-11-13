import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { SliderComponent } from "../slider/slider.component";
import { ImgComponent } from "../img/img.component";

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [MatGridListModule, CommonModule, SliderComponent, ImgComponent],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  cols: number =2;
  max_w = '';
  tiles = [
    { text: 'One', src:'/home/lucsa/Documentos/proceso/20240928_122958.jpg', color: 'lightblue' },
    { text: 'Two',   src:'/home/lucsa/Documentos/proceso/20240928_124410.jpg', color: 'lightblue'} ,
    { text: 'Three', src:'/home/lucsa/Documentos/proceso/20240928_122958.jpg', color: 'lightblue' }, 
    {text: 'Four',  src:'20241013_035552.jpg', color: 'lightblue' },
    {text: 'Four',  src:'20241013_035552.jpg', color: 'lightblue' }
  ];
  updateCols(value: number) {
    this.cols = value;
    
    console.log('Cols updated:', this.cols); // Verifica si se actualiza correctamente
  }
}
