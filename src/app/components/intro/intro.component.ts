import { introPageConfig } from './../../constants/intro-config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  introPageConfig: any;
  constructor() {
    this.introPageConfig = introPageConfig;
  }

  ngOnInit(): void {
  }

}
