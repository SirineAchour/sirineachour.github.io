import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name;
  linkedin_link;
  email_link;
  github_link;
  phone;
  address;
  gender;
  age;
  email;
  phone_link

  constructor(private data: DataService) { }

  ngOnInit(): void {
    //console.log(this.router)
    this.linkedin_link = DataService.linkedin_link
    this.github_link = DataService.github_link
    this.name = DataService.my_name
    this.phone = DataService.phone
    this.phone_link = DataService.phone_link
    this.email = DataService.email
    this.email_link = DataService.email_link
    this.address = DataService.location
    this.gender = DataService.gender
    this.age = this.data.get_age()
  }

  go_to_contact(){
    $(window).scrollTop($('#contact').position().top);
    /*$('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 2000);*/
  }
}
