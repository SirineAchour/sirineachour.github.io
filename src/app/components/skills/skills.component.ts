import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  tech_skills
  availableColors = [
    { name: 'none', color: undefined },     { name: 'Primary', color: 'primary' },
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
          "Bash", "Batch", "C/C++", "C#", "Java","Javascript", "PowerShell", "PHP", "Python","Typescript"
        ]
      },
      {
        domain:"DevOps",
        skills:[
          "Azure", "Azure Pipelines", "Cypress", "Docker","Docker Swarm", "FluxCD", "Git", "GitHub Actions", "Helm", "Hyper V", "Istio", "Kiali", "Kustomize", "Kubernetes", /*"OpenShift",*/ "Puppet", "RabbitMQ","Selenium", "Serverless Functions", "Vagrant", "Windows Containers"
        ]
      },
      {
        domain: "Web Development",
        skills:[
          "Angular", "CSS", "Express", "HTML","NestJS", "Prestashop", "SCSS", "Symfony", "Vue.js", ".Net Core"
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
          "Arduino", "Matlab", "PowerBI", "STM32", "Talend", "Unity"
        ]
      }
    ]
  }

}
