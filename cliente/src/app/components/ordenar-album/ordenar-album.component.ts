import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter, Input,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Image } from '../../models/image';
@Component({
  selector: 'app-ordenar-album',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ordenar-album.component.html',
  styleUrl: './ordenar-album.component.css'
})
export class OrdenarAlbumComponent implements OnInit { // Added OnInit interface
  newTitleData:any
  titles: Image[] = [
    { vista: "gril", text: 'One', src: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg.webp', orden: 2 },
    { vista: "gril", text: 'Two', src: 'https://images.unsplash.com/photo-1503965830912-6d7b07921cd1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', orden: 1 },
    { vista: "gril", text: 'Three', src: 'https://media.istockphoto.com/id/1696167872/es/foto/vista-a%C3%A9rea-del-bosque-al-atardecer-en-el-fondo-de-las-monta%C3%B1as-en-los-dolomitas.jpg?s=1024x1024&w=is&k=20&c=7vV3EJNJYoIvUv7msIT4m71mMg7Ovu5i9uS43s2C4ww=', orden: 3 },
    { vista: "gril", text: 'Four', src: 'https://marketing4ecommerce.net/wp-content/uploads/2024/02/ias-generadoras-de-imagenes.jpg', orden: 4 },
    { vista: "gril", text: 'Five', src: 'https://marketing4ecommerce.net/wp-content/uploads/2023/10/Imagen-generada-con-Dalle-3-e1696926524914.jpg', orden: 5 }
  ];

  @Output() titleChange = new EventEmitter<Image[]>();

  ngOnInit() { // Called on component initialization
    this.emitTitle();
  }
  emitTitle() {
    this.titles.sort((a, b) => a.orden - b.orden);
    this.titleChange.emit(this.titles);
    console.log("esto",this.titles)
  }

@Input() clickedTileData:any
  movImag(titleData:any){
    console.log("antes" ,this.clickedTileData)
    console.log("despues ",this.newTitleData)

  }

  }

