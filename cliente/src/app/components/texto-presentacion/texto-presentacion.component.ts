import { NgIf } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@Component({
  selector: 'app-texto-presentacion',
  standalone: true,
  imports: [
    FormsModule, NgIf
  ],
  templateUrl: './texto-presentacion.component.html',
  styleUrl: './texto-presentacion.component.css'
})
export class TextoPresentacionComponent {
  isOpen: boolean = false;
  
  
  title: string = ''; 
  description: string = ''; 
  
  @Input() 
  backgroundColor: string = '#FBFBFB';
  
  constructor() {}
  
  ngOnInit(): void {
    // carga de datos inicial
    this.fetchData();
  }
  
  fetchData(): void {
    // Ejemplo de valores cargados 
    this.title = 'Aca va el titulo';
    this.description = 'Aca va la descripción';
  }
  
  onSubmit(): void {
    
    console.log('Título guardado:', this.title);
    console.log('Descripción guardada:', this.description);
    
    // Enviar title y description al servidor
  }
  
  
  openText() {
    this.isOpen = !this.isOpen;
    
  }
  
  confirmText() {
    this.isOpen = false;
  }
  
  closeText() {
    this.isOpen = false;
  }

  cancelText() {
    this.closeText();
  }


}
