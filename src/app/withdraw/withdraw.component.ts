import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  
  error:string;
  withdrawAmount:number;
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
    var check = this.service.withdraw(account, password, amount);
    if(check!=0){
      this.withdrawAmount = check;
    }
    else{
      this.error = "Error in Withdrawal"
    }
  }

}
