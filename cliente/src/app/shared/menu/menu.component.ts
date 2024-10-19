import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
      
  }
}
