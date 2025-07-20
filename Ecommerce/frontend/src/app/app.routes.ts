import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./products/products.component').then((m) => m.ProductsComponent),
  // },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  // },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.routes').then((m) => m.USER_ROUTES),
  // },
];
