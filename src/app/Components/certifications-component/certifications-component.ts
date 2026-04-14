import { Component } from '@angular/core';
import {Theme} from '../../services/theme'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certifications-component',
  imports: [RouterLink],
  templateUrl: './certifications-component.html',
  styleUrl: './certifications-component.css',
})
export class CertificationsComponent {

  constructor(public theme: Theme){
    
  }
   certItems : string[] = ['Reslponsive Web Design', 'Angular Basics', 'Introduction to MEAN Stack'
    

  ]

}
