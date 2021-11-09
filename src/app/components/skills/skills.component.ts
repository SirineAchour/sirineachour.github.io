import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  tech_skills
  availableColors = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
  constructor() { }

  ngOnInit(): void {
    this.tech_skills = [
      {
        domain: "Software Engineering",
        skills: [
          "Advanced Algorithmics", "Complexity of Algorithms", "Data Structures", "Design Patterns", "Distributed Systems", "Documentation", "Testing", "UML"
        ]
      },
      {
        domain: "Programming Languages",
        skills: [
          "Bash", "C/C++", "C#", "Java","Javascript", "PHP", "Python","Typescript"
        ]
      },
      {
        domain: "Web Development",
        skills:[
          "Angular", "CSS", "Express", "HTML","NestJS", "Prestashop", "SCSS", "Symfony", "Vue.js", ".Net Core"
        ]
      },
      {
        domain:"DevOps",
        skills:[
          "Cypress", "Docker","Docker Swarm", "Git", "GitHub Actions", /*"Kubernetes", "OpenShift",*/ "Puppet", "RabbitMQ","Selenium", "Serverless", "Vagrant"
        ]
      },
      {
        domain: "Database Management",
        skills:[
          "MongoDB", "MySQL", "Oracle"
        ]
      },
      {
        domain: "Other",
        skills:[
          "Arduino", "Matlab", "STM32", "Talend", "Unity"
        ]
      }
    ]
  }

}
