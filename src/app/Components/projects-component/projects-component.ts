import { Component } from '@angular/core';

interface ProjectItems {
  name: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-projects-component',
  imports: [],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css',
})
export class ProjectsComponent {
  projectItems: ProjectItems[] = [
    { name: 'PromdiFarm', description: 'A marketplace for Filipino farmers', url: 'promdifarm.com' },
    { name: 'San Juan Senior HS Website', description: 'A simple school website', url: 'https://sjshs.vercel.app/' },
  ];
}
