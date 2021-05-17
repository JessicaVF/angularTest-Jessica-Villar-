import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiIncidentService } from '../api-incident.service';
import { Incident } from '../models/incident';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {
  @Input()
  incident!: Incident;
constructor(private apiService: ApiIncidentService, private router: Router) { }

  ngOnInit(): void {
  }
delete(){
  this.apiService.delete(this.incident.id).subscribe();
  this.router.navigate(['/incidents'])
}
}
