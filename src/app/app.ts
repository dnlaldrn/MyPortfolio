import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import {AboutComponent} from './about-component/about-component';
import {ExperinceComponent} from './experince-component/experince-component';
import {TechStackComponent} from './tech-stack-component/tech-stack-component';
import {CertificationsComponent} from './certifications-component/certifications-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutComponent,ExperinceComponent, TechStackComponent, CertificationsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyPortfolio');
}
