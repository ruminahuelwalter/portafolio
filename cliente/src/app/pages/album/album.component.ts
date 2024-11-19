import { Component,Input,Output,EventEmitter,  OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from "../img/img.component";
import {MatGridListModule} from '@angular/material/grid-list';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorSwatchesModule } from 'ngx-color/swatches';
import { ColorEvent } from 'ngx-color';
import { Image } from '../../models/image';


@Component({
  selector: 'app-album',
  standalone: true,
  imports: [MatGridListModule, CommonModule, ImgComponent,ColorSketchModule,ColorSwatchesModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
 
  
  max_w = '';
  @Input() titles:Image[]=[] 
  @Output() clickImg = new EventEmitter<any>();
  @Input() 
      position: string = 'relative';
  @Input() 
      size: string = '600px';
  @Input()
      onColorChange($event: string) {
        this.backgroundColor = $event;
        
        console.log('llego: ', $event)
      }
  @Input() 
    backgroundColor: string = '#199D43';
  @Input() 
    background: string = '#199D43';
  @Input() cols: number =0;

  onTitleChange(title: any) {
    this.titles = title;
  }
   onImageClicked(tileData: any) {
      this.clickImg.emit(tileData)
      console.log('Imagen clickeada:', tileData);
      // Aquí puedes realizar acciones específicas cuando se hace clic en una imagen
    }
    
  trackByTile(index: number, item: any) {
  return item.orden; // Track by the orden property
}
}
