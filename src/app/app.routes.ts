import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: "",
    loadComponent: () => import("./pages/home-page/home-page").then((x) => x.HomePage),
  },
  {
    path: "journey",
    loadComponent: () => import("./pages/journey-component/journey-component").then((x) => x.JourneyComponent),
  },
   {
    path: "certification",
    loadComponent: () => import("./pages/certifications/certifications").then((x) => x.Certifications),
  },
];
