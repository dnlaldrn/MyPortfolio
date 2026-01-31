import { Component } from '@angular/core';
import {Theme} from '../../services/theme'

@Component({
  selector: 'app-experince-component',
  imports: [],
  templateUrl: './experince-component.html',
  styleUrl: './experince-component.css',
})
export class ExperinceComponent {
   constructor(public theme:Theme){

  }
}
