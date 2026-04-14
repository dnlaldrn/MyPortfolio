import { Component } from '@angular/core';
interface CertificationElement{
  img:string;
}


@Component({
  selector: 'app-certification-page',
  imports: [],
  templateUrl: './certification-page.html',
  styleUrl: './certification-page.css',
})
export class CertificationPage {
  certification : CertificationElement[]=[{
    img:'/images/certifications/cert1.png'
  },{
 img:'/images/certifications/cert2.png'
  },
  {
 img:'/images/certifications/cert3.png'
  }
  
 ]

}
