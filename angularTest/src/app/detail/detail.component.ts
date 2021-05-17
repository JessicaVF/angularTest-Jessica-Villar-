import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiIncidentService } from '../api-incident.service';
import { Incident } from '../models/incident';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  incident!: Incident;
  constructor(private apiService: ApiIncidentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || -1;
    this.apiService.getOne(+id).subscribe(v => this.incident = v);
  }

}

