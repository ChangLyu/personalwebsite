import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./general-infor/general-infor.module').then(m => m.GeneralInforModule)
  }, {
    path: 'projects',
    loadChildren: () => import('./angular-projects/angular-projects.module').then(m => m.ProjectsModule)
  },
  {
    path: '',
    redirectTo: '/menu/intro',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
