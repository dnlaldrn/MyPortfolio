import { Component } from '@angular/core';
import {Theme} from '../../services/theme'

interface SocialLinksItems{
  name:string,
  icons:string,
  link:string
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
    icons: '/images/linkedin.png',
    link: 'https://www.linkedin.com/in/daniel-aldreen-manjares-85749933a/'
    },
    {name: 'Tiktok',
    icons: '/images/tik-tok.png',
    link: 'https://www.tiktok.com/@danielmanjares_on_ig',
    },
    {name: 'Github',
    icons: '/images/github.png',
    link : 'https://github.com/dnlaldrn?tab=overview&from=2026-03-01&to=2026-03-29'
    }

  ]

}
