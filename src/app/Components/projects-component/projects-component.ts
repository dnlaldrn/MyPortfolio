import { Component,  } from '@angular/core';
import { Theme } from '../../services/theme';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface ProjectItems {
  name: string;
  description: string;
  completed: boolean;
  url: string;
}

@Component({
  selector: 'app-projects-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css',
})
export class ProjectsComponent {
  constructor(public theme: Theme) {}
  projectItems: ProjectItems[] = [
    {
      name: 'San Juan Senior High School Web',
      description: 'A prototype web-based school platform designed to explore how students can access academic resources, announcements, and essential information in a centralized system.',
      completed: true,
      url: 'https://sjshs.vercel.app',
    },
     {
      name: 'Environmental Science',
      description: 'An interactive web platform for environmental science that presents educational content, resources, and insights to promote awareness and understanding of environmental issues and sustainability',
      completed: true,
      url: 'https://envsci.vercel.app/',
    },
    {
      name: 'Rock Paper And Scissor Game',
      description: 'A simple Rock–Paper–Scissors game developed to strengthen my programming fundamentals.',
      completed: true,
      url: 'https://dnlaldrn.github.io/Rock-Paper-Scissors/',
    },
    {
      name: 'Stanza',
      description: 'An ongoing web-based dorm listing app for Batangas City',
      completed: false,
      url: 'Coming soon',
    },
  ];

}
