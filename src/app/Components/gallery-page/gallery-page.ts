import { Component , inject} from '@angular/core';
import {slideElements, GalleryService } from '../../services/gallery/gallery';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-gallery-page',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css',
})
export class GalleryPage {

  slides : slideElements[]=[];

  private galleryservice = inject(GalleryService);

  ngOnInit():void{
    this.slides = this.galleryservice.getAllElements();
  }

}
