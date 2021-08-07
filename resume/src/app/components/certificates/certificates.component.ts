import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit, AfterViewInit {

  @ViewChild("accord") accord: MatAccordion
  panelOpenState = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.accord.openAll()
  }

}
