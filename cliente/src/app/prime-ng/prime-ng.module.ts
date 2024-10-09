import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    SidebarModule,
    MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    ToastModule,



    
    
  ]
})
export class PrimeNgModule { }
