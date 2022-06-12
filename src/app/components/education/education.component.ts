import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  events
  constructor() { }

  ngOnInit(): void {
    this.events = [
      {
        date: "2017 - 2022",
        location: "National Institute of Applied Sciences and Technology",
        location_link: "http://www.insat.rnu.tn/",
        title: "National Engineering Diploma",
        icon: "laptop",
        content: "\
        <strong>Major: </strong> Software Engineering <br>\
        <strong>Specialization: </strong> Testing & DevOps\
        <br><br>\
        This involved a focus on software design, software architecture, software development, optimization \
        IT project management, operating systems, advanced algorithmics, cybersecurity, \
        networks, low-level programming, DevOps, and Testing.\
        <br>\
        In addition to computer science courses, I also had advanced mathematics and advanced physics courses during the first two years that constitute the preparatory cycle. \
        ",
        links: [
          {
            display: "Attestations (French)",
            link: "../../../assets/docs/insat/attestations.pdf",
            disabled: false
          },
          {
            display: "Transcripts (French)",
            link: "../../../assets/docs/insat/transcripts.pdf",
            disabled: false
          }
        ]
      },
      {
        date: "2013 - 2017",
        location: "Hammam Susah High School 2",
        title: "Highschool Diploma with honors",
        icon: "school",
        content: "<strong>Specialization: </strong> Mathematics <br><br>This involved a focus on mathematics and physics but also biology, human sciences, and languages (English, Arabic, French, and Spanish).",
        links: [
          /*{
            display: "Diploma (English)",
            link: "../../../assets/diplomas/",
            disabled: true
          },*/
          {
            display: "Diploma (Arabic)",
            link: "../../../assets/docs/diplomas/bac.pdf",
            disabled: false
          }
        ]
      }
    ]
  }

}
