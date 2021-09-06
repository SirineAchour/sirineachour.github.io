import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  linkedin;
  linkedin_link;
  github;
  github_link;
  phone;

  email;
  phone_link
  email_link
  location
  location_link

  constructor(private data: DataService) { }

  ngOnInit(): void {
    //console.log(this.router)
    this.linkedin = DataService.linkedin
    this.linkedin_link = DataService.linkedin_link
    this.github = DataService.github
    this.github_link = DataService.github_link
    this.phone = DataService.phone
    this.phone_link = DataService.phone_link
    this.email = DataService.email
    this.email_link = DataService.email_link
    this.location = DataService.location
    this.location_link = DataService.location_link

  }
}
