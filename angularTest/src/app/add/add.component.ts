import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiIncidentService } from '../api-incident.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  incidentForm: FormGroup;
  formSubmitted = false;
  types =["", "BUG", "FEATURE"]
  levels =["", "ERROR", "FATAL", "MEDIUM", "MINOR"]

  constructor(private fb: FormBuilder, private apiService: ApiIncidentService, private route: Router) {
    this.incidentForm =fb.group({
    description: fb.control('', Validators.required),
    email: fb.control('', Validators.required),
    level: fb.control('', Validators.required),
    open: fb.control(''),
    progress: fb.control('', Validators.required),
    titre:  fb.control('', Validators.required),
    type: fb.control('', Validators.required)
  })
  }

  ngOnInit(): void {
  }
  submitForm(): void {
    this.formSubmitted = true;
    if (this.incidentForm.valid) {
      this.apiService.add(this.incidentForm.value).subscribe(r => this.route.navigate(['/incidents']));
    }
  }

}
