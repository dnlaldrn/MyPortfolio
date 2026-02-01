import { Injectable } from '@angular/core';

export interface slideElements {
  img : string,
  link : string,
}
@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  slides : slideElements[]= [
    {
      img : '/images/Gallery/Day1.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
     {
      img : '/images/Gallery/Day2.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
     {
      img : '/images/Gallery/Day3.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
     {
      img : '/images/Gallery/Day3.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day3.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day3.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day3.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    
 
  ]

  getAllElements(): slideElements[] {
    return this.slides;
  } 
}
