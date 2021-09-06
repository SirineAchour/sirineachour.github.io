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
        Worked, within a team of frontend and backend developpers, on a website for <a href='https://www.nutislab.com/' target='_blank' class='icon link'></a><a href='https://www.nutislab.com/' target='_blank' class='link-word'>Nutislab</a> for managing their team, clients and orders.\
        <br>\
        This included :\
        <br>\
        - Creating a dynamic form builder from scartch.\
        <br>\
        - Implementing efficiently the orders' life-cycle.\
        <br>\
        - Managing the different user accounts and their access rights.\
        <br>\
        - Designing a user-friendly and functional UI.\
        ",
        links: [
          {
            display: "Recommendation Letter",
            link: "../../../assets/docs/parcus/rec_letter.pdf"
          },
        ],
        skills: [
          "Angular", "Debugging", "Testing", "Web design"
        ]
      },
      {
        date: "Jul 2021 - Aug 2021",
        location: "Michigean University",
        location_link: "https://sites.lsa.umich.edu/",
        title: "DevOps Engineering Intern",
        icon: "laptop",
        content: "\
        Worked with a research group in the University of Michigan on updating their Translation Networks site.\
        <br>\
        This website is a project that was contributed to by a team of art, history, and IT professors as well as librarians and other university students.\
        <br>\
        It provides a collection of digital tools that assist students in connecting ideas, creative activities, and sources.\
        <br>\
        <br>\
        This internship's tasks included :\
        <br>\
        - Troubleshooting an AWS server instance.\
        <br>\
        - Migrating an old Express website to the lastest Node version.\
        <br>\
        - Analyzing and evaluating files and database tables (<a href='https://github.com/SirineAchour/TN-internship-automation-scripts' target='_blank' class='icon link'></a><a href='https://github.com/SirineAchour/TN-internship-automation-scripts' target='_blank' class='link-word'>automatically !</a>).\
        <br>\
        - Studying, comparing and merging development and production code and <a href='https://github.com/SirineAchour/TN-dev-prod-database-merge-script' target='_blank' class='icon link'></a><a href='https://github.com/SirineAchour/TN-dev-prod-database-merge-script' target='_blank' class='link-word'>databases</a>.\
        <br>\
        - Containerizing the Express website.\
        <br>\
        - Providing a thorough documentation.\
        ",
        links: [
          {
            display: "Attestation",
            link: "../../../assets/docs/tn/attestation.pdf"
          },
          {
            display: "Report",
            link: "../../../assets/docs/tn/report.pdf"
          }
        ],
        skills:[
          "AWS", "Automation", "Docker", "Documentation", "Express", "MySQL", "NodeJS", "Putty", "Python", "Troubleshooting"
        ]
      },
      {
        date: "Jul 2020 - Aug 2020",
        location: "DOT IT",
        location_link: "http://www.dotit-corp.com/",
        title: "Web Development Intern",
        icon: "http",
        content: "\
        This was my first internship, during which I worked on a website for shopping at a multi-location store.\
        <br>\
        My contribution was : \
        <br>\
        - Designing and implementing a pop-up for re-routing a new user to the chosen shop.\
        <br>\
       - Implementing a tool for customizing the pop-up contents in the back-office.\
        ",
        links: [
          {
            display: "Attestation (french)",
            link: "../../../assets/docs/dotit/attestation.pdf"
          },
          {
            display: "Report (french)",
            link: "../../../assets/docs/dotit/report.pdf"
          }
        ]
      }
    ]
  }

}
