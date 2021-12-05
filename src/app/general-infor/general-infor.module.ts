import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInforRoutingModule } from './general-infor-routing.module';
import { GeneralInforComponent } from './general-infor.component';
import { IntroComponent } from './components/intro/intro.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenubarComponent } from './components/menubar/menubar.component';



@NgModule({
  declarations: [
    GeneralInforComponent,
    IntroComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    MenubarComponent
  ],
  imports: [
    CommonModule,
    GeneralInforRoutingModule
  ]
})
export class GeneralInforModule { }
