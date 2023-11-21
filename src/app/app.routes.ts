import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/brief/brief.component').then((c) => c.BriefComponent)
  }
];
