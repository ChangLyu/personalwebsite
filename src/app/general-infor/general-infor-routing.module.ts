import { GeneralInforComponent } from './general-infor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [

  {
    path: '', component: GeneralInforComponent, children: [
      {
        path: 'intro',
        component: IntroComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '', redirectTo: 'intro', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralInforRoutingModule { }
