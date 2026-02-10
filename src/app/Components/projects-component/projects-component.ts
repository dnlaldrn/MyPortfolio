import { Component } from '@angular/core';
import { Theme } from '../../services/theme';

interface ProjectItems {
  name: string;
  description: string;
  status: string;
  url: string;
}

@Component({
  selector: 'app-projects-component',
  imports: [],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css',
})
export class ProjectsComponent {
  constructor(public theme: Theme) {}
  projectItems: ProjectItems[] = [
    {
      name: 'PromdiFarm',
      description: 'A marketplace for Filipino farmers',
      status: 'On progress',
      url: 'promdifarm.com',
    },
  ];
}
