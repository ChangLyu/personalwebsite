import { WebFormProjectComponent } from '@projects/components/web-form-project/web-form-project.component';
import { AngularProjectsComponent } from '@projects/angular-projects.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AngularProjectsComponent, children: [
      {
        path: 'webform',
        component: WebFormProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularProjectsRoutingModule { }
