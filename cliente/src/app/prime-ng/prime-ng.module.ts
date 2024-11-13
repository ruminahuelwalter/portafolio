import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AlbumComponent } from '../pages/album/album.component';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    SidebarModule,
    MenuModule,
    MenubarModule,
    ButtonModule
   
  ]
})
export class PrimeNgModule { }
