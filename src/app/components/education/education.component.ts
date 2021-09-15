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
        date: "2017 - Present",
        location: "National Institute of Applied Sciences and Technology",
        location_link: "http://www.insat.rnu.tn/",
        title: "National Engineering Diploma",
        icon: "laptop",
        content: "\
        <strong>Major : </strong> Software engineering <br>\
        <strong>Specilization : </strong> DevOps\
        <br><br>\
        This invovled a focus on software design, software architecture, software development, \
        IT project management, operating systems, advanced algorithmics, cybersecurity, \
        networks, low level programming, DevOps and Testing.\
        <br>\
        In addition to computer science courses, I also had advanced mathematics and advanced physics courses. \
        ",
        links: [
          {
            display: "Attestations (french)",
            link: "../../../assets/docs/insat/attestations.pdf"
          },
          {
            display: "Transcripts (french)",
            link: "../../../assets/docs/insat/transcripts.pdf"
          }
        ]
      },
      {
        date: "2013 - 2017",
        location: "Hammam Susah High School 2",
        title: "Baccalaureate with honors",
        icon: "school",
        content: "Specialization in Mathematics <br><br>This invloved a focus on mathematics and physics but also biology, human sciences and languages (English, Arabic, French and Spanish).",
        links: [
          {
            display: "Diploma (english)",
            link: "../../../assets/diplomas/"
          },
          {
            display: "Diploma (french)",
            link: "../../../assets/diplomas/"
          }
        ]
      }
    ]
  }

}
