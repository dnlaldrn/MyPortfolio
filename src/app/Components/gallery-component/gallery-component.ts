import {  Component, inject } from '@angular/core';
import {GalleryService, slideElements} from '../../services/gallery/gallery';




@Component({
  selector: 'app-gallery-component',
  standalone:true,
  imports: [],
  templateUrl: './gallery-component.html',
  styleUrl: './gallery-component.css',
})
export class GalleryComponent  {
  slides : slideElements[] =[]

  private galleryserice = inject(GalleryService)

  ngOnInit():void{
    this.slides = this.galleryserice.getAllElements();
  }

  

  


}
