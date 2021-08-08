import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'resume';
  links;
  activeLink;
  name;
  linkedin;
  github;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.router)
    this.linkedin = DataService.linkedin
    this.github = DataService.github
    this.name = DataService.my_name
    this.links = [
      {
        display: "About",
        link: "#about"
      },
      {
        display: "Education",
        link: "#education"
      },
      {
        display: "Experience",
        link: "#experience"
      },
      {
        display: "Certificates",
        link: "#certificates"
      },
      {
        display: "Skills",
        link: "#skills"
      },
      {
        display: "Projects",
        link: "#projects"
      },
      {
        display: "Interests",
        link: "#interests"
      },
      {
        display: "Contact",
        link: "#contact"
      }
    ];


    this.activeLink = this.links[0].link;

    let self = this
    $(window).scroll(function () {

      var winHeight = $(this).height();
      var scrollTop = $(this).scrollTop();
      var scrolls = $(".scroll");

      for (let index = 0; index < scrolls.length; index++) {
        const element = scrolls[index];
        var elemHeight = $(element).height();
        var elementTop = $(element).position().top;

        if (elementTop < scrollTop + winHeight && scrollTop < elementTop + elemHeight) {
          self.activeLink = "#" + $(element).attr("id")
          return
        }
      }
    });
  }
}
