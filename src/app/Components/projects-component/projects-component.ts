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
      name: 'SDO-Website',
      description: 'A prototype web-based school platform designed to explore how students can access academic resources, announcements, and essential information in a centralized system.',
      completed: true,
      url: 'https://sdo-alangilan.vercel.app',
    },
    {
      name: 'GreenQuest',
      description: 'A web platform where users upload videos of eco-friendly actions (planting trees, cleaning beaches, recycling, etc.), an AI validates the action, awards points, and users can redeem those points for real rewards.',
      completed: false,
      url: 'https:/greenquest-ph.vercel.app/',
    },
    {
      name: 'Stanza',
      description: 'An ongoing web-based dorm listing app for Batangas City',
      completed: false,
      url: 'Coming soon',
    },
  ];

}
