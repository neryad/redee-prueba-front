import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create',
    loadComponent: () =>
      import('./create-company/create-company.component').then(
        (m) => m.CreateCompanyComponent
      ),
  },

  {
    path: 'manage',
    loadComponent: () =>
      import('./manage-company/manage-company.component').then(
        (m) => m.ManageCompanyComponent
      ),
  },
];
