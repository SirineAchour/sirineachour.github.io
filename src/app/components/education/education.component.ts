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
        content: "Major: Software engineering <br><br> This invovled a focus on software design, software architecture, software development, IT project management, cybersecurity, Testing and DevOps.",
        links: [
          {
            display: "Transcripts",
            link: "../../../assets/diplomas/"
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
