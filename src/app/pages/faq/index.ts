import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'faq',
        title: 'F.A.Q',
        loadComponent: async () => (await import('./faq.component')).FaqComponent,
    },
];
