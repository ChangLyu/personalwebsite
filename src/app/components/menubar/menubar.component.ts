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
      link: "/intro"
    },
    {
      name: "Resume",
      link: "/resume"
    },
    {
      name: "Projects",
      link: "/projects"
    },
    {
      name: "Contact",
      link: "/contact"
    }]
  }

  ngOnInit(): void {
  }

}
