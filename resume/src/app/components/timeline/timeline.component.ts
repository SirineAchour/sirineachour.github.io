import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() events;
  constructor() { }

  ngOnInit(): void {
    this.events = [
      {
        date: "2018-10-09",
        title: "Event Title",
        content: "Event content content content content content content content content content content content content content content"
      },
      {
        date: "2018-10-09",
        title: "Event Title 2",
        content: "Event content content content content content content content content content content content content content content"
      }
    ]
  }

}
