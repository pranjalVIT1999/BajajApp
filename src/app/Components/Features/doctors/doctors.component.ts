import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/doctors.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(private doctorsService:DoctorsService) { }
  items=this.doctorsService.shoppingList
  ngOnInit(): void {
  }

}
