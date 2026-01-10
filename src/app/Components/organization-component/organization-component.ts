import { Component } from '@angular/core';

interface OrganizationItem {
  name:string;
}
@Component({
  selector: 'app-organization-component',
  imports: [],
  templateUrl: './organization-component.html',
  styleUrl: './organization-component.css',
})
export class OrganizationComponent {
  organizationItems:OrganizationItem[]=[
    {name:"Association of Commited Computer Science Students - ACCESS"},
    {name:"Student Coders Innovative Programming Techniques - SCRIPT"}
  ]

}
