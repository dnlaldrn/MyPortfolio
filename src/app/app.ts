import { Component, signal } from '@angular/core';
import {HomePage} from './pages/home-page/home-page';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HomePage, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {;
}
