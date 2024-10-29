import { Routes } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        //component: MenuComponent
        component: LayoutComponent

    }
];
