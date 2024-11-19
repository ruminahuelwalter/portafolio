import { Routes } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AlbumComponent } from './pages/album/album.component';
import { ConfiguracionesAlbumComponent } from './components/configuraciones-album/configuraciones-album.component';
export const routes: Routes = [
    {
        path: '',
        //component: MenuComponent
        component: LayoutComponent,


    },{
        path: 'album',
        component: AlbumComponent,

    },
    {
        path: 'cofiguraciones',
        component: ConfiguracionesAlbumComponent,

    }
];
