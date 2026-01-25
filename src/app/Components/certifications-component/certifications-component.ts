import { Component } from '@angular/core';
import {Theme} from '../../services/theme'

@Component({
  selector: 'app-certifications-component',
  imports: [],
  templateUrl: './certifications-component.html',
  styleUrl: './certifications-component.css',
})
export class CertificationsComponent {

  constructor(public theme: Theme){
    
  }

}
