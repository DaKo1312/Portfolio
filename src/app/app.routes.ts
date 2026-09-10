import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Daniel Korbmacher | Frontend Developer',
  },
  {
    path: 'legal-notice',
    loadComponent: () => import('./pages/legal-notice/legal-notice').then((m) => m.LegalNotice),
    title: 'Legal Notice | Daniel Korbmacher',
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
    title: 'Privacy Policy | Daniel Korbmacher',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
