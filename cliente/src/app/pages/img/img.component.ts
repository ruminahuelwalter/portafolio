
import {ChangeDetectionStrategy, Component ,Input,Output,EventEmitter  } from '@angular/core';
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
  imgData:any
  
  isHovered = false;
  @Output() clickImg = new EventEmitter<any>();
  @Input() titleData: any;


  onImageClick(){
    this.imgData=this.titleData
    this.clickImg.emit(this.imgData)
    console.log("esta es la inf ", this.imgData)
  }

  toggleHover(state: boolean) {
    this.isHovered = state;
 
  }
}
