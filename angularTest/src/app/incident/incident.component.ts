import { Component, Input, OnInit } from '@angular/core';
import { Incident } from '../models/incident';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {
  @Input()
  incident!: Incident;
constructor() { }

  ngOnInit(): void {
  }

}
