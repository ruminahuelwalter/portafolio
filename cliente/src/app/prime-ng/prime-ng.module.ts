import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    CommonModule,
    FileUploadModule,
    ImageModule,
    MenubarModule,
    MenuModule,
    SidebarModule,
    ToastModule,
    ProgressSpinnerModule

  ]
})
export class PrimeNgModule { }
