import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name;
  linkedin;
  github;

  constructor(){}

  ngOnInit(): void {
    //console.log(this.router)
    this.linkedin = DataService.linkedin
    this.github = DataService.github
    this.name= DataService.my_name
  }
}
