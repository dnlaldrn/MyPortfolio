import { Component } from '@angular/core';
import {Theme} from '../../services/theme'
@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {
 constructor(public theme:Theme){

  }
}
