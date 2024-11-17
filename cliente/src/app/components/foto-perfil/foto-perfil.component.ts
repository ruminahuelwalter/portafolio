import { Component, Input, OnInit } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { CommonModule } from '@angular/common';

import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorSwatchesModule } from 'ngx-color/swatches';
import { ColorPickerCardComponent } from "../color-picker-card/color-picker-card.component";

@Component({
  selector: 'app-foto-perfil',
  standalone: true,
  imports: [
    CommonModule,
    ColorSketchModule,
    ColorSwatchesModule,
    ColorPickerCardComponent
],
  providers: [],
  templateUrl: './foto-perfil.component.html',
  styleUrl: './foto-perfil.component.css'
})


export class FotoPerfilComponent implements OnInit {

 
  imagenPerfil: string;
  
  @Input() 
    backgroundColor: string = '#ffeb3b';

  constructor( private storage: Storage ) {
    this.imagenPerfil = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWl4ngiL0w69Hjqe9Pm5jYcmOCEBG0TQ9z__FTcE3ed3Cx1kWO32Ue-UExwj0BXYzn9Y&usqp=CAU';
    //this.imagenPerfil = 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839MPA4459PT28D315202404W8000H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/capibara-divertido-en-traje-capyitalism-capitalismo-pun-pegatina.jpg';
  }
  
  ngOnInit(): void {

    this.getImagen()
  }
 
  onUpload($event: any) {
    const file = $event.target.files[0];
    if (file) {
      const imgRef = ref(this.storage, `imagesPerfil/perfil`);
      console.log(imgRef)
      uploadBytes(imgRef, file).then( () =>{
        this.getImagen()
      })
      .catch( error => console.log(error));
    }
  }

  getImagen() {
    const imgRef = ref(this.storage, 'imagesPerfil');
    list(imgRef).then(async response => {
      const url = await getDownloadURL(response.items[0])
      this.imagenPerfil = url;
    })
      .catch(error => console.log(error));
  }

  @Input()
  onColorChange($event: string) {
    this.backgroundColor = $event;
    console.log('llego: ', $event)
  }
  
}


