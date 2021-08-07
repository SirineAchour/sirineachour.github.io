import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static my_name:string = "Sirine Achour"
  static github:string = "https://github.com/sirineachour"
  static linkedin:string = "https://www.linkedin.com/in/sirine-achour/"
  constructor() { }
}
