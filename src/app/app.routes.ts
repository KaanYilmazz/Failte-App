import { Routes } from '@angular/router';
import { authGuard } from '@lib/guards';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: async () => (await import('@pages/auth')).routes,
        canMatch: [authGuard({ requiresAuthentication: false })],
    },
    {
        path: '',
        loadChildren: async () => (await import('@pages/home')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'faq',
        loadChildren: async () => (await import('@pages/faq')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'account',
        loadChildren: async () => (await import('@pages/account')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'job/:jobId',
        loadChildren: async () => (await import('@pages/jobs')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'room/:roomId',
        loadChildren: async () => (await import('@pages/home')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'jobs',
        loadChildren: async () => (await import('@pages/jobs')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'rooms',
        loadChildren: async () => (await import('@pages/home')).routes,
        canMatch: [authGuard()],
    },
    {
        path: '**',
        loadComponent: async () => (await import('@pages/screens/not-found/not-found.component')).NotFoundComponent,
    },
];
