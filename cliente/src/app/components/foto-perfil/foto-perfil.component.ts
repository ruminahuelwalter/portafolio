import { Component } from '@angular/core';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';


import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-foto-perfil',
  standalone: true,
  imports: [
    FileUploadModule,
    PrimeNgModule,
  ],
  providers: [MessageService],
  templateUrl: './foto-perfil.component.html',
  styleUrl: './foto-perfil.component.css'
})


export class FotoPerfilComponent {
  constructor(private messageService: MessageService) {}

    onUpload(event: any) {
        this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Imagen subida correctamente' });
    }

}
