import { ServicesModule } from './../services/services.module';
import { AngularProjectsRoutingModule } from './angular-projects-routing.module';
import { WebFormProjectComponent } from '@projects/components/web-form-project/web-form-project.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularProjectsComponent } from '@projects/angular-projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AngularProjectsComponent,
    WebFormProjectComponent
  ],
  imports: [
    ServicesModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AngularProjectsRoutingModule
  ]
})
export class ProjectsModule { }
