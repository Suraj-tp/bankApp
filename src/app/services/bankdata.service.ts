import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankdataService {
  db: any = {
    //key:value pairs
    //key always want to be unique
    1000: { "accno": 1000, "username": "neer", "password": 1000, "balance": 5000 },
    1001: { "accno": 1001, "username": "laisha", "password": 1001, "balance": 6000 },
    1002: { "accno": 1002, "username": "vypn", "password": 1002, "balance": 8000 }

  }

  constructor() { }

  //login
  login(acno:any,pswd:any) {

    let db = this.db

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        return true
      }
      else {
        alert("Invalid Password")
        return false
      }
    }
    else {
      alert("User Credentials not found")
      return false
    }
  }

  //register
  register(username:any,acno:any,password:any){
    var db=this.db
    if(acno in db){
      return false
    }
    else{
      db[acno]={
        acno,
        username,
        password,
        "balance":0
      }
      console.log(db);//if we want to see the updated database
      return true
      
    }
  }

  //deposit
  deposit(accno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    var db=this.db
    if(accno in db){
      if(pswd==db[accno]["password"]){
        db[accno]["balance"]+=amount
        return db[accno]["balance"]
      }
      else{
        alert("Incorrect Password")
        return false
      }
    }
    else{
      alert("User does not exist")
      return false
    }
  }


  //withdraw

  withdraw(accno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    var db=this.db
    if(accno in db){
      if(pswd==db[accno]["password"]){
        if(db[accno]["balance"]>amount){
          db[accno]["balance"]-=amount
          return db[accno]["balance"]
        }
        else{
          alert("Insufficent Funds")
          return false
        }
      }
      else{
        alert("Incorrect Password")
        return false
      }

    }
    else{
      alert("User doen not exists")
      return false
    }
  }
}  
