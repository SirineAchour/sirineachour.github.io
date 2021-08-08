import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects
  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        title: "Collect/Connect",
        order: 0,
        real_order: 0,
        date: "Jan 2021 - May 2021",
        description: "\
            Single player educational card game that showcases the art work held at the Michigan University library and studies the links between them.\
            <br><br><ul>\
            <li>Game: fun design + fun gameplay experience</li>\
            <li>Backend : MySQL database + REST API design and implementation for logging player behavior, authorizing kol chay</li>\
            <li>AI Judge : judging the siilarity between 2 cards based on</li>\
            </ul>\
        "
      },
      {
        title: "End Of Studies Projects Administrative Website",
        order: 4,
        real_order: 1,
        date: "Feb 2020 - May 2020",
        description: "\
        A website for managing INSAT's end of studies projects\
        <br><br>Frontend\
        <br>Backend\
        "
      },
      {
        title: "Cryptography Tool",
        date: "Feb 2020 - May 2020",
        order: 1,
        real_order: 2,
        description: "\
        A console app that offers a bunch of cryptography stuff\
        <br><br><ul>\
        <li>Hashing</li>\
        <li>Encoding </li>\
        <li>Symmetric encryption/decryption</li>\
        <li>Asymmetric encryption/decryption (RSA/ECIES)</li>\
        <li>Cracking hashes: brute-force, dictionnary attack, simple brute force</li>\
        </ul>\
        \
        "
      },
      {
        title: "Task Me",
        order: 2,
        real_order: 3,
        date: "Feb 2020 - May 2020",
        description: "\
        A website for odd jobs\
          <br><br>Frontend\
        "
      },
      {
        title: "Implementation of popular AI algorithms",
        order: 3,
        real_order: 4,
        date: "Feb 2020 - May 2020",
        description: "\
        "
      },
      {
        title: "Spill The Tea",
        order: 5,
        real_order: 5,
        date: "Feb 2020 - May 2020",
        description: "\
        A website for posting confessions and asking for advcie anonymously\
        Researching and developping a new Deep Learning based approach.\
        "
      },
      {
        title: "Robots",
        order: 6,
        real_order: 6,
        date: "Feb 2020 - May 2020",
        description: "\
        <ul>\
        <li>Rally Robot, For Fast and Furious INSAT robotics competition</li>\
        <li>Rough-Road Robot, For ENICarthage Robots robotics competition</li>\
        </ul>\
        "
      }
    ]

    this.sort_for_grid()
  }

  sort_for_grid() {
    this.projects.sort(function (a, b) {
      return a.order - b.order;
    });
  }

  sort_for_list() {
    this.projects.sort(function (a, b) {
      return a.real_order - b.real_order;
    });
  }
}
