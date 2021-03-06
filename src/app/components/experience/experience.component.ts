import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  events:any
  constructor() { }

  ngOnInit(): void {
    this.events = [
      {
        date: "February 2022 - July 2022",
        location: "Realities",
        location_link: "https://www.realities.io/",
        title: "Software & DevOps Engineering Intern",
        icon: "laptop",
        content: "\
        I took up this internship with Realities.io as part of my university studies, during which, I introduced DevOps practices to the team's development workflow and developed synchronization tool. \
        <br>\
        My tasks were mainly: \
        <br>\
        - Designing, setting up and implementing CI/CD pipelines for a cross-platform VR project. \
        <br>\
        - Designing and developing a tool for synchronizing large remote and local assets using git-like operations.\
        ",
        links: [],
        skills: [ "Automation", "Azure DevOps" , "Debugging", "Docker", "Documentation", "Hyper-V", "Oculus Quest", "Playstation", "PowerShell", "Python", "Self-hosted agents", "Unreal Engine", "Vagrant", "Virtualization", "Windows Containers"]
      },
      {
        date: "Apr 2021 - Sep 2021",
        location: "Parcus Digital Solutions",
        location_link: "https://parcus.fr/",
        title: "DevOps Engineer & Front-end Developer",
        icon: "http",
        content: "\
        I worked, within a team of front-end and back-end developers, on a website for a company to manage their team, clients, and orders.\
        <br>\
        <br>\
        My tasks included, but were not limited to:\
        <br>\
        - Introducing DevOps practices to a web application.\
        <br>\
        - Designing CI/CD pipelines.\
        <br>\
        - Implementing a dynamic form builder from scratch.\
        <br>\
        - Managing user accounts, roles, and access rights.\
        <br>\
       - Designing a user-friendly and functional UI.\
        ",
        links: [
          {
            display: "Recommendation Letter",
            link: "../../../assets/docs/parcus/rec_letter.pdf",
            disabled: false
          },
        ],
        skills: [
          "Angular", "Automation", "Debugging","Documentation", "Docker", "Git", "GitHub Actions", "Testing","Web design"
        ]
      },
      {
        date: "Jul 2021 - Aug 2021",
        location: "Michigan University",
        location_link: "https://sites.lsa.umich.edu/",
        title: "DevOps Engineering Intern",
        icon: "laptop",
        content: "\
        I worked with a research group at the University of Michigan on updating their Translation Networks site.\
        <br>\
        This website is a project that was contributed to by a team of art, history, and IT professors as well as librarians and other university students.\
        <br>\
        It provides a collection of digital tools that assist students in connecting ideas, creative activities, and sources.\
        <br>\
        <br>\
        My contribution was:\
        <br>\
        - Troubleshooting an AWS server instance.\
        <br>\
        - Upgrading a web app to the latest Node version.\
        <br>\
        - Analyzing and evaluating files and database tables (automatically!).<a href='https://github.com/SirineAchour/TN-internship-automation-scripts' target='_blank' class='icon link'></a>\
        <br>\
        - Studying, comparing, and merging<a href='https://github.com/SirineAchour/TN-dev-prod-database-merge-script' target='_blank' class='icon link'></a> development and production code and databases.\
        <br>\
        - Containerizing a web app.\
        <br>\
        - Providing thorough documentation of my work and my findings.\
        ",
        links: [
          {
            display: "Attestation",
            link: "../../../assets/docs/tn/attestation.pdf",
            disabled: false
          },
          {
            display: "Report",
            link: "../../../assets/docs/tn/report.pdf",
            disabled: false
          }
        ],
        skills:[
          "AWS EC2", "Automation", "Docker", "Documentation", "Express", "MySQL", "NodeJS", "Putty", "Python", "Troubleshooting"
        ]
      },
      {
        date: "Jul 2020 - Aug 2020",
        location: "DOT IT e-business solutions",
        location_link: "http://www.dotit-corp.com/",
        title: "Web Development Intern",
        icon: "http",
        content: "\
        This was my first internship, during which I learned how to navigate in a professional work environment while working on a website for shopping at a multi-location store.\
        <br>\
        <br>\
        My contribution was: \
        <br>\
        - Designing and implementing a pop-up for re-routing a new user to the chosen shop.\
        <br>\
       - Implementing a tool for customizing the pop-up contents in the back-office.\
        ",
        links: [
          {
            display: "Attestation (French)",
            link: "../../../assets/docs/dotit/attestation.pdf",
            disabled: false
          },
          {
            display: "Report (French)",
            link: "../../../assets/docs/dotit/report.pdf",
            disabled: false
          }
        ]
      }
    ]
  }

}
