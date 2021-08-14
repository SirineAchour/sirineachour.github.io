import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'CV';
  links;
  activeLink;
  name;
  linkedin;
  github;
  scrollTop
  phone_link
  email_link
  linkedin_link

  constructor() { }

  ngOnInit(): void {
    this.linkedin_link = DataService.linkedin_link
    this.name = DataService.my_name
    this.phone_link = DataService.phone_link
    this.email_link = DataService.email_link

    this.scrollTop = 0
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
      self.scrollTop = $(this).scrollTop();
      var scrolls = $(".scroll");

      for (let index = 0; index < scrolls.length; index++) {
        const element = scrolls[index];
        var elemHeight = $(element).height();
        var elementTop = $(element).position().top;

        if (elementTop < self.scrollTop + winHeight && self.scrollTop < elementTop + elemHeight) {
          self.activeLink = "#" + $(element).attr("id")
          return
        }
      }
    });
  }

  go_up(){
    window.scrollTo(0,0)
  }

  go_to(link_number){
    let link = this.linkedin_link
    if(link_number === "1"){
      link = this.phone_link
    }

    if(link_number === "2"){
      link = this.email_link
    }
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  go_to_contact(){
    $(window).scrollTop($('#contact').position().top);
  }

  download_cv(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../assets/docs/cv.pdf');
    link.setAttribute('download', `sirine-achour-cv.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
