import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-show-balance',
  templateUrl: './show-balance.component.html',
  styleUrls: ['./show-balance.component.css']
})
export class ShowBalanceComponent implements OnInit {

  error:string;
  balanceAmount:number;
  service:MyServiceService;
  constructor(service:MyServiceService) {
    this.service = service;
  }

  ngOnInit() {
  }

  balance(value) {
    var account = value.account;
    var password = value.password;
    var check = this.service.balance(account, password);
    if(check!=0) {
      this.balanceAmount = check;
    }
    else{
      this.error = "Wrong information";
      
    }
  }

}
