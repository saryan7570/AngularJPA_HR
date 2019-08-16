import { Component, OnInit } from '@angular/core';
import { MyServiceService, BankDetails } from '../my-service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  accountId:number;
  errorAccount:string;
  bank:BankDetails[] = [];
  service:MyServiceService;
  constructor(service:MyServiceService) {
    this.service = service;
  }

  ngOnInit() {
    this.bank = this.service.get();
  }

  create(value) {
    var name = value.name;
    var password = value.password;
    var email = value.email;
    var mobile = value.mobile;
    var address = value.address;
    var dob = value.address;
    var account = this.service.create(name, password, email, mobile, address, dob);
    if(account!=0) {
      this.accountId = account;
    }
    else{
      this.errorAccount = "Account not Created";
    }
  }

}
