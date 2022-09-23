import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  longText = `Explicabo voluptatem mollitia et repellat qui dolorum quasi`;

  constructor() { }

  ngOnInit(): void {
  }

}
