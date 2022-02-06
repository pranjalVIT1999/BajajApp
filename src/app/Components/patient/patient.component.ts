import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { TodoData } from 'src/Models/Todo';
import { GetPatientService } from './get-patient.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  inputTodo:string='';  
  title='todo app';  
  todos:TodoData[]=[];
  constructor(private rs:GetPatientService) { }

  ngOnInit(): void {
   
    this.rs.getPatients().subscribe
    (
      (response: TodoData[])=>
      {
        this.patients = response;
      },
      (error: string)=>
      {
        console.log("Error Occured :" +error);
      }
    )
  }
  toggleDone(id:number){  
    this.todos.map((v,i) =>{  
      if(i==id) v.completed = !v.completed;  
      return v;  
    })
    
  }  
  deleteTodo(id:number){  
    this.todos = this.todos.filter((v , i) => i !==id);  
    
    
  }  
  AddTodo(){ 
    
    this.todos.push({  
      content:this.inputTodo,  
      completed:false  
    });  
    this.inputTodo="";  
  }  
  columns = ["content","completed"];
  index = ["content","completed"];
  patients : TodoData[] = [];

}
