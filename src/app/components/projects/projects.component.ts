import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @ViewChild("accord") accord: MatAccordion
  @ViewChild("accordp") accordp: MatAccordion
  panelOpenState = true;


  projects
  personal_projects
  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        title: "Super Secure Chatroom",
        order: 4,
        real_order: 1,
        date: "May 2021 - Present",
        description: "\
        An end-to-end encrypted and containerized console chatroom.\
        <br>\
        I implemented DevSecOps principles while developing this project (trusted images, static code analysis, secrets, ...) \
        ",
        skills: [
          "Cryptography", "Docker", "Docker-compose", "ECIES", "Git","LDAP", "SonarQube", "Security"
        ],
        docs: [
          {
            name: "Client",
            path: "https://github.com/SirineAchour/GestionPFEFront"
          },
          {
            name: "Server",
            path: "https://github.com/SirineAchour/GestionPFEBack"
          }
        ]
      },
      {
        title: "Collect/Connect",
        order: 0,
        real_order: 0,
        date: "Jan 2021 - May 2021",
        description: "\
            This is a single player educational card game that showcases the artwork held at the University of Michigan's library and studies the links between them.\
            <br>\
            I worked, within the University of Michigan researchteam, on 2 of the project's 3 main axes:\
            <br><ul>\
            <li>Front-end: This is the game design and implementation part done using Unity.</li>\
            <li>Back-end: This part involved the design and implementation of not only a MySQL database but also a RESTful API.</li>\
            </ul>\
        ",
        skills: [
          "AI",
          "Database design",
          "Documentation",
          "Game design",
          "Git",
          "MySQL",
          "NestJS",
          "RESTful API",
          "Security",
          "Unity",
        ],
        docs: [
          {
            name: "Attestation",
            path: "../../../assets/docs/collect-connect/attestation.pdf"
          },
          {
            name: "Report",
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
          I developed the user interface of a sales desktop application using JavaFX.\
          <br>\
          This application is that of an interactive terminal installed in shopping malls which allows shoppers\
          to take advantage of several offers and promotions proposed by different categories of shops.\
        ",
        skills: [
          "Design",
          "Java",
          "JavaFX",
          "Optimization",
          "SceneBuilder"
        ],
        docs: [
          {
            name: "Github",
            path: "https://github.com/SirineAchour/Sale-Sale-Sale"
          }
        ]
      },
      {
        title: "Administrative Website",
        order: 4,
        real_order: 1,
        type: "Web Development",
        date: "Jan 2021 - Feb 2021",
        description: "\
        A website for the staff members of INSAT <a href='http://www.insat.rnu.tn/' target='_blank' class='icon link'></a> to manage students' end of studies projects.\
        ",
        skills: [
          "Angular",
          "Database design",
          "HTML/CSS/JS",
          "MySQL",
          "NestJS",
          "RESTful API",
          "Web design"
        ],
        docs: [
          {
            name: "Front-end",
            path: "https://github.com/SirineAchour/GestionPFEFront"
          },
          {
            name: "Back-end",
            path: "https://github.com/SirineAchour/GestionPFEBack"
          }
        ]
      },
      {
        title: "Cryptographic Toolkit",
        date: "Nov 2020 - Jan 2021",
        order: 1,
        real_order: 2,
        description: "\
        A console app that offers a collection of cryptography tools.\
        <br>\
        These tools include:\
        <br><ul>\
        <li>Hashing</li>\
        <li>Encoding </li>\
        <li>Symmetric encryption/decryption</li>\
        <li>Key generation</li>\
        <li>Asymmetric encryption/decryption (RSA/ECIES)</li>\
        <li>Cracking hashes: brute-force, dictionary attack, simple brute force</li>\
        </ul>\
        \
        ",
        skills: [
          "Cryptography", "ECIES", "Git", "Python", "RSA"
        ],
        docs: [
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
              This is a script that generates a graph of all the signature relationships in a GPG/PGP keyring.\
              \
              ",
              skills: [
                "Automation",
                "Cryptography",
                "Python"
              ],
              docs: [
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
        type: "Web Development",
        date: "Mar 2020 - Jul 2020",
        description: "\
        I worked on the front-end of a website for people providing and looking for odd jobs.\
        ",
        skills: [
          "HTML/CSS/JS",
          "Vue.js",
          "Web design"
        ],
        docs: [
          {
            name: "GitHub",
            path: "https://github.com/SirineAchour/TaskMeFront"
          }
        ]
      },
      {
        title: "Implementing popular AI algorithms",
        order: 3,
        real_order: 4,
        date: "Nov 2020 - Jan 2021",
        description: "\
        For learning purposes, I created 2 console games that implement popular AI algorithms.\
        <br>\
        The games are: \
        <br>\
        <ul>\
          <li> Nim <a href='https://en.wikipedia.org/wiki/Nim' target='_blank' class='icon link'></a>:\
          <br>\
          <div class='fix-margin'>\
            This is a mathematical strategy game that requires 2 players to take turns splitting a given heap into uneven parts.\
            <br>\
            I implemented 2 versions of the opposing AI player using the algorithm ''MiniMax''. One version is with pruning; The other is without.\
            </div>\
          </li>\
          <li> Sliding Puzzle <a href='https://en.wikipedia.org/wiki/Sliding_puzzle' target='_blank' class='icon link'></a>: \
          <div class='fix-margin'>\
            The basis of this game is simple: \
            <br>\
            A player is provided a square puzzle of 'n' slots, containing numbers ranging from 1  to 'n-1', leaving one slot empty. \
            <br>\
             At each turn, the player slides a piece of their choosing to the empty slot.  \
             <br>\
             The goal is to sort these numbers in ascending order.\
            <br>\
            I implemented the ''A*'' algorithm in order to solve (if possible) any random sliding puzzle of any size. \
            </div>\
          </li>\
        </ul>\
        ",
        skills: [
          "AI",
          "Complexity of algorithms",
          "Optimization",
          "Problem solving",
          "Python",
        ],
        docs: [
          {
            name: "Nim",
            path: "https://github.com/SirineAchour/Nim"
          },
          {
            name: "Sliding puzzle",
            path: "https://github.com/SirineAchour/Taquin8"
          }
        ]
      },
      {
        title: "Spill The Tea",
        order: 5,
        real_order: 5,
        type: "Web Development",
        date: "Jun 2020",
        description: "\
        This project is a website for posting confessions and asking for advice anonymously.\
        <br>\
        ",
        skills: [
          ".NET Core",
          "C#",
          "Database design",
          "HTML/CSS/JS",
          "MVC architecture",
          "MySQL",
          "Web design"
        ],
        docs: [
          {
            name: "GitHub",
            path: "https://github.com/SirineAchour/SpillTheTea"
          }
        ]
      }
    ]

    this.personal_projects = [
      {
        title: "Personal Website",
        order: 1,
        real_order: 1,
        type: "Web Development",
        date: "Sep 2021",
        description: "\
        This project is a website for recruiters to browse through my history, skills, recommendation letters, and reports.\
        <br>\
        ",
        skills: [
          "Angular",
          "Automation",
          "Github Actions",
          "Github Pages",
          "HTML/CSS/JS",
          "Web design"
        ],
        docs: [
          {
            name: "GitHub",
            path: "https://github.com/SirineAchour/sirineachour.github.io"
          }
        ]
      },
      {
        title: "Robotics",
        order: 2,
        real_order: 2,
        date: "Dec 2019 - Feb 2020",
        description: "\
        I worked, with a team of other students, on designing, coding, and assembling 2 robots for 2 different competitions. \
        <br>\
        We managed to make 2 fully functional robots despite us having limited resources and limited time.\
        <br>\
        The robots are: \
        <br>\
        <ul>\
        <li>A rally robot, For Fast and Furious INSAT robotics competition</li>\
        <li>A rough-road robot, For ENICarthage Robots robotics competition</li>\
        </ul>\
        ",
        skills: [
          "Arduino", "Assembly", "Design", "Mechanics"
        ]
      }
    ]
    //this.sort_for_grid()
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

  ngAfterViewInit() {
    this.accord.openAll()
    this.accordp.openAll()
  }
}
