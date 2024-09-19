import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterOutlet , PrimeNgModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Inicio',
              icon: 'pi pi-palette',
              items: [
                  {
                      label: 'Foto de perfil',
                      route: '/installation'
                  },
                  {
                      label: 'Descripción',
                      route: '/configuration'
                  }
              ]
          },
          {
              label: 'Album',
              icon: 'pi pi-link',
              /* items: [
                {
                    label: 'Fondo',
                    route: '/installation'
                },
                {
                    label: 'Descripción',
                    route: '/configuration'
                }
            ] */
              /* command: () => {
                  this.router.navigate(['/installation']);
              } */
          },
          {
              label: 'External',
              icon: 'pi pi-home',
              items: [
                  {
                      label: 'Angular',
                      url: 'https://angular.io/'
                  },
                  {
                      label: 'Vite.js',
                      url: 'https://vitejs.dev/'
                  }
              ]
          }
      ];
  }
}
