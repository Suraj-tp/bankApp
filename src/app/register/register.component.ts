import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankdataService } from '../services/bankdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //class properties,variabl es will define here

  uname=""
  acno=""
  pswd=""

  registerForm=this.fb.group({
    acno:[''],
    pswd:[''],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
  })
  
  //database

  constructor(private ds:BankdataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm.value);
    
    // alert("register clicked")
    let username=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd

    // if(this.registerForm.get('uname')?.errors){
    //   alert("Invalid Username")
    // }

    if(this.registerForm.valid){
      const result=this.ds.register(username,acno,pswd)

      if(result){
        alert("Successfully registered")
        this.router.navigateByUrl("login")
      }
      else{
        alert("Already existing customer,Please log in")
        // this.router.navigateByUrl("login")
  
      }
    }
    else{
      alert("Invalid Form")
    }
   
  }
}
