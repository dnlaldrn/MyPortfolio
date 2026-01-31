import { Component } from '@angular/core';
import {Theme} from '../../services/theme'

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
  constructor(public theme: Theme){
    
  }
  organizationItems:OrganizationItem[]=[
    {name:"Association of Commited Computer Science Students - ACCESS"},
    {name:"Student Coders Innovative Programming Techniques - SCRIPT"}
  ]

}
