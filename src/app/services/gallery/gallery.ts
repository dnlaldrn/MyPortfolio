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
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7590358395559988500?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
     {
      img : '/images/Gallery/Day3.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7591447198395682068?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
     {
      img : '/images/Gallery/Day4.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7592370901765737749?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day5.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7593020142582254868?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day6.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7593684025135500564?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day7.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7594390136515775764?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day8.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7595317336903617812?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day9.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7596652923136789781?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day10.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7597657753930632469?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day11.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7599554907036863764?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day12.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7601458545309125909?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day13.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7603033852596063509?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
     {
      img : '/images/Gallery/Day14.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7603701614658030869?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day15.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7604040257725648149?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    {
      img : '/images/Gallery/Day16.png',
      link : 'https://www.tiktok.com/@danielmanjares_on_ig/video/7604396078091324692?is_from_webapp=1&sender_device=pc&web_id=7600618382979122709'
    },
    
    
 
  ]

  getAllElements(): slideElements[] {
    return this.slides;
  } 
}
