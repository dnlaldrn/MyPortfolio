import {  Component, inject } from '@angular/core';
import {GalleryService, slideElements} from '../../services/gallery/gallery';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-gallery-component',
  standalone:true,
  imports: [RouterLink],
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
