import { Component } from '@angular/core';
import {Theme} from '../../services/theme'


@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  constructor(public theme:Theme){

  }
  isHover = false;


}
