import { resumeConfig } from './../../constants/resume-config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resumeConfig: any;
  constructor() {
    this.resumeConfig = resumeConfig;
  }

  ngOnInit(): void {
  }

}
