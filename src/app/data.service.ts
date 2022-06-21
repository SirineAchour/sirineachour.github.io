import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static my_name: string = "Sirine Achour"
  static github: string = "github.com/sirineachour"
  static github_link: string = "https://github.com/sirineachour"
  static linkedin: string = "linkedin.com/in/sirine-achour/"
  static linkedin_link: string = "https://www.linkedin.com/in/sirine-achour/"
  static gender: string = "Female"
  static email: string = "sirineachour@outlook.com"
  static phone: string = "+49 15 752 807 645"
  static phone_link: string = "tel:+4915752807645"

  static email_link: string = "mailto:sirineachour@outlook.com"
  static location: string = "Berlin, Germany"
  static location_link: string = "https://goo.gl/maps/Pkc8fJimBPYAxDE79"
  constructor() {

  }

  get_age() {
    let birthDate = new Date()
    birthDate.setDate(10)
    birthDate.setMonth(8)
    birthDate.setFullYear(1998)
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
