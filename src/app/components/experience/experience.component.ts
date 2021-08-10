import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  events
  constructor() { }

  ngOnInit(): void {
    this.events = [
      {
        date: "Apr 2021 - Present",
        location: "Parcus",
        location_link: "https://parcus.fr/",
        title: "Front-end Developper",
        icon: "http",
        content: "\
        <a href='https://www.nutislab.com/' target='_blank' class='icon link'></a> Worked on a website for Nutislab for managing their team, clients and orders.\
        <br>\
        This included :\
        <br>\
        - Creating a dynamic form builder from scartch.\
        <br>\
        - Implementing efficiently the orders life-cycle.\
        <br>\
        - Designing a user-friendly and functional UI.\
        ",
        links: [
          {
            display: "Recommendation Letter",
            link: "../../../assets/diplomas/"
          },
        ]
      },
      {
        date: "Jul 2021 - Aug 2021",
        location: "Michigean University",
        location_link: "https://sites.lsa.umich.edu/",
        title: "DevOps Engineering Intern",
        icon: "laptop",
        content: "\
        - Troubleshooting an AWS server instance.\
        <br>\
        - Migrating an old Express website to the lastest Node version.\
        <br>\
        - Analyzing and evaluating files and database tables.\
        <br>\
        - Containerizing the Express website.\
        ",
        links: [
          {
            display: "Attestation",
            link: "../../../assets/diplomas/"
          },
          {
            display: "Report",
            link: "../../../assets/diplomas/"
          }
        ]
      },
      {
        date: "Jul 2020 - Aug 2020",
        location: "DOT IT",
        location_link: "http://www.dotit-corp.com/",
        title: "Web Development Intern",
        icon: "http",
        content: "\
        - Designing and implementing a pop-up for re-routing a new user to the chosen shop.\
        <br>\
       - Implementing a tool for customizing the pop-up contents in the back-office\
        ",
        links: [
          {
            display: "Report",
            link: "../../../assets/diplomas/"
          }
        ]
      }
    ]
  }

}
