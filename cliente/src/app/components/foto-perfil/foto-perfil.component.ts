import { Component, Input, OnInit } from '@angular/core';


import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { VistaCarouselComponent } from "../vista-carousel/vista-carousel.component";
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "../../shared/menu/menu.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foto-perfil',
  standalone: true,
  imports: [

    VistaCarouselComponent,
    FormsModule,
    MenuComponent,
    CommonModule
],
  providers: [],
  templateUrl: './foto-perfil.component.html',
  styleUrl: './foto-perfil.component.css'
})


export class FotoPerfilComponent implements OnInit {
 
  imagenPerfil: string;
  
  // Muevo el componente
  xOffset1 = '100px';
  yOffset1 = '80px';



  xOffset = '100px';
  yOffset = '80px';
  @Input() 
    position: string = 'relative';
  @Input() 
    size: string = '600px';
  @Input() 
    backgroundColor: string = 'crimson';

  constructor( private storage: Storage ) {
    this.imagenPerfil = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWl4ngiL0w69Hjqe9Pm5jYcmOCEBG0TQ9z__FTcE3ed3Cx1kWO32Ue-UExwj0BXYzn9Y&usqp=CAU';
  }
  
  ngOnInit(): void {
    this.getImagen()
  }
 
  onUpload($event: any) {
    const file = $event.files[0];
    if (file) {
      const imgRef = ref(this.storage, `imagesPerfil/perfil`);
      uploadBytes(imgRef, file).then( response =>{
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
}