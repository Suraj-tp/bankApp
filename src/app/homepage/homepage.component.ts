import { Component, OnInit } from '@angular/core';
import { BankdataService } from '../services/bankdata.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""

  constructor(private ds:BankdataService) { }  //depencency injection

  ngOnInit(): void {
  }

  deposit(){
    // alert("deposit clicked")
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount
    var result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount+"deposited successfully and balance is"+result)
    }
    
  }

  withdraw(){
    // alert("withdaw clicked")
    var acno=this.acno1
    var pswd=this.pswd1
    var amt=this.amount1
    var result=this.ds.withdraw(acno,pswd,amt)
    if(result){
      alert(amt+"debited succesfully and the balance is"+result)
    }
  }
}
