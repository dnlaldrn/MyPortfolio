import { Component } from '@angular/core';

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
