import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Incident } from './models/incident';

@Injectable({
  providedIn: 'root'
})
export class ApiIncidentService {

  constructor(private http: HttpClient) { }
  async getAll(): Promise<any[]> {
    return await this.http.get<any[]>('http://localhost:8080/learn/api/incidents').toPromise();
  }

  add(value: Incident): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8080/learn/api/incidents', value);
  }

  getOne(id: number): Observable<Incident> {
    return this.http.get<Incident>(`http://localhost:8080/learn/api/incidents/${id}`);
  }
}
