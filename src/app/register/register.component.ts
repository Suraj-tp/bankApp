import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    acno:'',
    pswd:'',
    uname:''
  })
  
  //database

  constructor(private ds:BankdataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    // alert("register clicked")
    let username=this.uname
    var acno=this.acno
    var pswd=this.pswd
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
}
