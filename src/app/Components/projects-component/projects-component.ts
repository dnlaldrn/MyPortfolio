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
      name: 'San Juan Senior High School Web',
      description: 'A prototype web-based school platform designed to explore how students can access academic resources, announcements, and essential information in a centralized system.',
      status: 'Completed',
      url: 'sjshs.vercel.app',
    },
     {
      name: 'Environmental Science',
      description: 'An interactive web platform for environmental science that presents educational content, resources, and insights to promote awareness and understanding of environmental issues and sustainability',
      status: 'On progress',
      url: 'envsci.vercel.app',
    },
    {
      name: 'Rock Paper And Scissor Game',
      description: 'A simple Rock–Paper–Scissors game developed to strengthen my programming fundamentals.',
      status: 'Completed',
      url: 'https://dnlaldrn.github.io/Rock-Paper-Scissors/',
    },
    {
      name: 'Stanza',
      description: 'An ongoing web-based dorm listing app for Batangas City',
      status: 'On progress',
      url: 'Coming soon',
    },
  ];
}
