import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoData } from 'src/Models/Todo';
@Injectable({
  providedIn: 'root'
})
export class GetPatientService {

  constructor(private http:HttpClient) { }
  url : string = "http://localhost:3000/getPatient"
  getPatients(){
    return this.http.get<TodoData[]>(this.url);
  }
}
