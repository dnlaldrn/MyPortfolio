import { Component } from '@angular/core';
import {Theme} from '../../services/theme'

interface SocialLinksItems{
  name:string,
  icons:string
}

@Component({
  selector: 'app-social-links-component',
  imports: [],
  templateUrl: './social-links-component.html',
  styleUrl: './social-links-component.css',
})
export class SocialLinksComponent {
  constructor(public theme : Theme){

  }
  socialLinkItems:SocialLinksItems[]=[
    {name: 'LinkedIn',
    icons: '/images/linkedin.png'
    },
    {name: 'Tiktok',
    icons: '/images/tik-tok.png'
    },
    {name: 'Github',
    icons: '/images/github.png'
    }

  ]

}
