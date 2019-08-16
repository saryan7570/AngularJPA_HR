import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  error:string;
  fundTransfer:number;
  service:MyServiceService
  constructor(service:MyServiceService) {
    this.service = service;
   }

  ngOnInit() {
  }

  transfer(value) {
    var account:number = value.account;
    var password:string = value.password;
    var account1:number = value.account1;
    var amount:number = value.amount;
    var check = this.service.transfer(account, password, account1, amount);
    if(check != 0) {
      this.fundTransfer = check;
    }
    else{
      this.error = "Fund transfer Failed"
    }
  }
}
