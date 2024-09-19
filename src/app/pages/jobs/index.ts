import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Jobs',
        loadComponent: async () => (await import('./jobs.component')).JobsComponent,
    },
    {
        path: 'job',
        title: 'Job',
        loadComponent: async () => (await import('./job/job.component')).JobComponent,
    }
];
