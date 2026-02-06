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
      img : '/images/Gallery/Day4.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day5.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day6.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day7.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day8.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day9.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day10.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day11.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day12.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    {
      img : '/images/Gallery/Day13.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7589535539137694997'
    },
    
 
  ]

  getAllElements(): slideElements[] {
    return this.slides;
  } 
}
