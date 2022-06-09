import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankdataService } from '../services/bankdata.service';

@Component({
  selector: 'app-banklogin',
  templateUrl: './banklogin.component.html',
  styleUrls: ['./banklogin.component.css']
})
export class BankloginComponent implements OnInit {
  //class properties,variabl es will define here


  //string interpolation
  aim = "Perfect Banking Partner"
  // property binding
  accno = "Account Number Please"
  //to store the values entered by the user
  acno = ""
  pswd = ""


  //database
  //creating database using a document.
  //document==>is a type of collection of key and value pairs
 
//dependency injection
  constructor(private router:Router,private ds:BankdataService) { }

  ngOnInit(): void {
  }
  //user defined functions will define here

  acnoChange(event: any) {
    // console.log(event.target.value);
    this.acno = event.target.value
    console.log(this.acno);
  }

  pswdChange(event: any) {
    // console.log(event.target.value);
    this.pswd = event.target.value;
    console.log(this.pswd);
  }

  // by using $event method
  
  login() {
    // alert("login clicked")
    var acno = this.acno
    var pswd = this.pswd

    const result=this.ds.login(acno,pswd)

    if (result) {
        alert("Login Successful")
        this.router.navigateByUrl("homepage")
    }
  }

  // by using template reference variable

  // login(acno:any,pswd:any) {
  //   console.log(acno);
    
  //     // alert("login clicked")
  //     var acno = acno.value
  //     var pswd = pswd.value
  //     let db = this.db
  //     if (acno in db) {
  //       if (pswd == db[acno]["password"]) {
  //         alert("Login Successful")
  //       }
  //       else {
  //         alert("Invalid Password")
  //       }
  //     }
  //     else {
  //       alert("User Credentials not found")
  //     }
  //   }

}
