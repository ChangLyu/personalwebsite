import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  menuList: any;
  constructor() {
    this.menuList = [{
      name: "Intro",
      link: "/menu/intro"
    },
    {
      name: "Resume",
      link: "/menu/resume"
    },
    {
      name: "Projects",
      link: "/menu/projects"
    },
    {
      name: "Contact",
      link: "/menu/contact"
    }]
  }

  ngOnInit(): void {
  }

}
