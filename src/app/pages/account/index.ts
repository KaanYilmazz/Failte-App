import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Account',
        loadComponent: async () => (await import('./account.component')).AccountComponent,
    },
];
