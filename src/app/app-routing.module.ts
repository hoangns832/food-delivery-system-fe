import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppGuard } from './guards/app.guard';
import { AuthGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'app',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
    component: MainLayoutComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
