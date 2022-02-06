import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../Services/user-login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string="Hospital Management Login Page";
  hide: boolean = true;
  user:string="";
  pass:string="";
  res:boolean=false;
  @ViewChild('f')form!: NgForm;
  constructor(private route: Router,
    private logIn: UserLoginService) { }

  ngOnInit(): void {
    this.logIn.SignOut();
  }
  onSubmit(){

    if(this.form.valid){

       this.user=this.form.controls['username'].value;
       this.pass=this.form.controls['password'].value;
       this.res= this.logIn.SignIn(this.user, this.pass);

      if(this.res) this.route.navigate(['dashboard']);
      else{
         console.log("Lol");
      }
    }
  }
}
