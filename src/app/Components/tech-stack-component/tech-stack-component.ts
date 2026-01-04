import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface FrontendTechStackItem {
  name:string;
}
interface BackendTechStackItem {
  name:string;
}
interface OtherTechStackItem {
  name:string;

}


@Component({
  selector: 'app-tech-stack-component',
  imports: [CommonModule],
  templateUrl: './tech-stack-component.html',
  styleUrl: './tech-stack-component.css',
})
export class TechStackComponent {
  techStackItems: FrontendTechStackItem[] = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Angular' },
    { name: 'Tailwind CSS' },
  ];
  backendTechStackItems: BackendTechStackItem[] = [
    {name: 'Node.js' },
    {name: 'Express.js' },
    {name: 'MySql'}
  ]
  otherTechStackItems: OtherTechStackItem[] = [
    {name: 'Git' },
    {name: 'GitHub' },
    {name: 'Prettier' },
    {name: 'Vercel' }
  ]
}
