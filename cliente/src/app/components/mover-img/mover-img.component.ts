import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BotonCambiosComponent } from '../boton-cambios/boton-cambios.component';

@Component({
  selector: 'app-mover-img',
  standalone: true,
  imports:  [FormsModule,BotonCambiosComponent],
  templateUrl: './mover-img.component.html',
  styleUrl: './mover-img.component.css'
})
export class MoverImgComponent {
  icono="pi pi-arrow-right-arrow-left"
  newTitleData:any

@Input() clickedTileData:any
  movImag(titleData:any){
    console.log("antes" ,this.clickedTileData)
    console.log("despues ",this.newTitleData)

  }
}
