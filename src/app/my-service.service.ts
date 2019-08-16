import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  http:HttpClient;
  bank:BankDetails[] = [];

  constructor(http:HttpClient) {
    this.http = http;
  }

  get():BankDetails[] {
    return this.bank;
  }

  create(name:string, password:string, email:string, mobile:number, address:string, dob:string):number {
    var b = new BankDetails(name,password, email,mobile,address,dob);
    this.bank.push(b);
    if(b!=null) {
      return b.accountId;
    }
    else{
      return 0;
    }
    // console.log(this.name+" "+this.address);
  }

  balance(account, password):number {
    var accountId = account;
    var password = password;
    for(let i=0; i<this.bank.length; i++) {
      if(this.bank[i].accountId == accountId && this.bank[i].password == password) {
        var balance = this.bank[i].balance;
        return balance;
      }
      else{
        return 0;
      }
    }
  }

  withdraw(account:number, password:string, amount:number):number{
    var accountId = account;
    var password = password;
    var amount = amount;
    for(let i=0; i<this.bank.length; i++) {
      if(this.bank[i].accountId == accountId && this.bank[i].password == password) {
        this.bank[i].balance -= amount;
        return amount;
      }
      else{
        return 0;
      }
    }
  }

  deposit(account:number, password:string, amount:number):number{
    var accountId = account;
    var password = password;
    var amount = amount;
    for(let i=0; i<this.bank.length; i++) {
      if(this.bank[i].accountId == accountId && this.bank[i].password == password) {
        this.bank[i].balance += amount;
        return amount;
      }
      else{
        return 0;
      }
    }
  }

  transfer(account:number, password:string, account1:number, amount:number):number {
    var check = 0, check1=0;
    for(let i=0; i<this.bank.length; i++) {
      if(this.bank[i].accountId == account && this.bank[i].password == password) {
        this.bank[i].balance -= amount;
        check=1;
        break;
      }
    }
    for(let i=0; i<this.bank.length; i++) {
      if(this.bank[i].accountId == account1) {
        this.bank[i].balance += amount;
        check=1;
        break;
      }
    }
    if(check==1 || check1==1){
      return amount;
    }
    else{
      return 0;
    }
  }

}

export class BankDetails {
  name:string;
  password:string;
  email:string;
  mobile:number;
  address:string;
  dob:string;
  accountId:number;
  balance:number;
  constructor(name:string, password:string, email:string, mobile:number, address:string, dob:string) {
    this.name = name;
    this.password = password;
    this.mobile = mobile;
    this.email = email;
    this.dob  = dob;
    this.address = address;
    this.balance = 25000;
    this.accountId = Math.floor(Math.random() * 90000000);
  }
}