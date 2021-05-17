import { Component, OnInit } from '@angular/core';
import { ApiIncidentService } from '../api-incident.service';
import { Incident } from '../models/incident';

@Component({
  selector: 'app-list-incidents',
  templateUrl: './list-incidents.component.html',
  styleUrls: ['./list-incidents.component.css']
})
export class ListIncidentsComponent implements OnInit {
  incidents!: Incident[];
  constructor(private apiService: ApiIncidentService) { }

  ngOnInit(): void {
    this.apiService.getAll().then( v => this.incidents = v)
  }

}
