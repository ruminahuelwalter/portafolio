
import {ChangeDetectionStrategy, Component   } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './img.component.html',
  styleUrl: './img.component.css',

})
export class ImgComponent {
  isHovered = false;

  toggleHover(state: boolean) {
    this.isHovered = state;
  console.log("el cursor esta sobre la tarjeta"+this.isHovered)
  }
}
