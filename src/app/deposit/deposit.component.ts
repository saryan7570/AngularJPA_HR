import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  error:string;
  depositAmount:number;
  service:MyServiceService
  constructor(service:MyServiceService) {
    this.service = service;
  }

  ngOnInit() {
  }

  deposit(value) {
    var account = value.account;
    var password = value.password;
    var amount = value.amount;
    var check = this.service.deposit(account, password, amount);
    if(check!=0){
      this.depositAmount = check;
    }
    else{
      this.error = "Error in Deposit"
    }
  }
}
