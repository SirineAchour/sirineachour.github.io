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
        ",
        skills:[
          "Angular", "NestJS", "AI"
        ],
        docs:[
          {
            name : "Attestation",
            path: "../../../assets/docs/collect-connect/attestation.pdf"
          },
          {
            name : "Report",
            path: "../../../assets/docs/collect-connect/report.pdf"
          },
        ]
      },
      {
        title: "Sale! Sale! Sale!",
        order: 4,
        real_order: 1,
        date: "Apr 2021",
        description: "\
        A website for managing INSAT's end of studies projects\
        <br><br>Frontend\
        <br>Backend\
        ",
        skills:[
          "Java"
        ],
        docs:[
          {
            name: "Github",
            path: "https://github.com/SirineAchour/Sale-Sale-Sale"
          }
        ]
      },
      {
        title: "End Of Studies Projects Administrative Website",
        order: 4,
        real_order: 1,
        date: "Jan 2021 - Feb 2021",
        description: "\
        A website for managing INSAT's end of studies projects\
        <br><br>Frontend\
        <br>Backend\
        ",
        skills:[
          "NestJS", "Angular"
        ],
        docs:[
          {
            name: "Frontend",
            path: "https://github.com/SirineAchour/GestionPFEFront"
          },
          {
            name: "Backend",
            path: "https://github.com/SirineAchour/GestionPFEBack"
          }
        ]
      },
      {
        title: "Cryptography Tool",
        date: "Nov 2020 - Jan 2021",
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
        ",
        skills:[
          "Python"
        ],
        docs:[
          {
            name: "GitHub",
            path: "https://github.com/SirineAchour/CryptographyTool"
          }
        ]
      },

      {
        title: "GPGTrustWebGraph",
        date: "Dec 2020",
        order: 1,
        real_order: 2,
        description: "\
        A console app that offers a bunch of cryptography stuff\
        \
        ",
        skills:[
          "nsit"
        ],
        docs:[
          {
            name: "GitHub",
            path: "https://github.com/SirineAchour/GPGTrustWebGraph"
          }
        ]
      },
      {
        title: "Task Me",
        order: 2,
        real_order: 3,
        date: "Mar 2020 - Jul 2020",
        description: "\
        A website for odd jobs\
          <br><br>Frontend\
        ",
        skills:[
          "Vue.js"
        ],
        docs:[
          {
            name: "GitHub",
            path: "https://github.com/SirineAchour/TaskMeFront"
          }
        ]
      },
      {
        title: "Implementation of popular AI algorithms",
        order: 3,
        real_order: 4,
        date: "Nov 2020 - Jan 2021",
        description: "\
        ",
        skills:[
          "Python"
        ],
        docs:[
          {
            name: "A*",
            path: "https://github.com/SirineAchour/Taquin8"
          },
          {
            name: "MiniMax",
            path: "https://github.com/SirineAchour/Nim"
          }
        ]
      },
      {
        title: "Spill The Tea",
        order: 5,
        real_order: 5,
        date: "Jun 2020",
        description: "\
        A website for posting confessions and asking for advcie anonymously\
        Researching and developping a new Deep Learning based approach.\
        ",
        skills:[
          ".NET Core"
        ],
        docs:[
          {
            name: "GitHub",
            path: "https://github.com/SirineAchour/SpillTheTea"
          }
        ]
      },
      {
        title: "Robots",
        order: 6,
        real_order: 6,
        date: "Dec 2019 - Feb 2020",
        description: "\
        <ul>\
        <li>Rally Robot, For Fast and Furious INSAT robotics competition</li>\
        <li>Rough-Road Robot, For ENICarthage Robots robotics competition</li>\
        </ul>\
        ",
        skills:[
          "Arduino"
        ]
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
