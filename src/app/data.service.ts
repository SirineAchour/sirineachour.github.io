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
  static email: string = "sirine.achour@insat.ucar.tn"
  static phone: string = "+216 94 032 272"
  static phone_link: string = "tel:+21694032272"
  static email_link: string = "mailto:sirine.achour@insat.ucar.tn"
  static location: string = "Cité Olympique, Menzah 1, Tunis - Tunisia"
  static location_link: string = "https://www.google.com/maps/place/Cit%C3%A9+Olympique,+Tunis/@36.8359808,10.1933136,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd34eb07a3b3d3:0x23c5f2a17f328a58!8m2!3d36.8366471!4d10.1948404"
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
