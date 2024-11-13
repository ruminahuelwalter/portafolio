import { Routes } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { AlbumComponent } from './pages/album/album.component';

export const routes: Routes = [
    {
        path: '',
        component: MenuComponent,

    },{
        path: 'album',
        component: AlbumComponent,

    }
];
