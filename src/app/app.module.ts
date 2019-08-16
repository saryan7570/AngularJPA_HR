import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ShowBalanceComponent } from './show-balance/show-balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    ShowBalanceComponent,
    DepositComponent,
    WithdrawComponent,
    FundTransferComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ HttpClient, MyServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
