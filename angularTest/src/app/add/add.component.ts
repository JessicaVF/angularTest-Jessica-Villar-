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
  // types = [
  //   { id: 1, name: "BUG" },
  //   { id: 2, name: "FEATURE" }
  // ];
  types =["", "BUG", "FEATURE"]
  // levels =[
  //   { id: 1, name: "ERROR" },
  //   { id: 2, name: "FATAL" },
  //   { id: 3, name: "MEDIUM" },
  //   { id: 4, name: "MINOR" },
  // ];
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
    console.log("here");

    console.log(this.incidentForm.value.open)
    console.log("here");
    if (this.incidentForm.valid) {
      this.apiService.add(this.incidentForm.value).subscribe(r => this.route.navigate(['/incidents']));
    }
  }

}
