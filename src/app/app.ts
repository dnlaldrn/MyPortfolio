import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header-component/header-component';
import { AboutComponent } from './Components/about-component/about-component';
import { ExperinceComponent } from './Components/experince-component/experince-component';
import { TechStackComponent } from './Components/tech-stack-component/tech-stack-component';
import { CertificationsComponent } from './Components/certifications-component/certifications-component';
import { ProjectsComponent } from './Components/projects-component/projects-component';
import { SocialLinksComponent } from './Components/social-links-component/social-links-component';
import { OrganizationComponent } from './Components/organization-component/organization-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    ExperinceComponent,
    TechStackComponent,
    CertificationsComponent,
    ProjectsComponent,
    SocialLinksComponent,
    OrganizationComponent,
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('MyPortfolio');
}
