import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

// @ts-ignore
export const routes: Routes = [
  {
    path: '',
    // If this path is the 'full' match...
    pathMatch: 'full',
    // ...redirect to this route.
    redirectTo: 'inicio',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Here we will add our application pages
      {
        path: 'inicio',
        loadChildren: () =>
          import('./pages/inicio/inicio.module').then((m) => m.InicioModule),
      },
      {
        path: 'mi-historia',
        loadChildren: () =>
          import('./pages/mi-historia/mi-historia.module').then(
            (m) => m.MiHistoriaModule
          ),
      },
      {
        path: 'contactame',
        loadChildren: () =>
          import('./pages/contactame/contactame.module').then(
            (m) => m.ContactameModule
          ),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./pages/posts/posts.module').then((m) => m.PostsModule),
      },
      {
        path: 'posts/:id',
        loadChildren: () =>
          import('./pages/article/article.module').then((m) => m.ArticleModule),
      },
    ],
  },
];
