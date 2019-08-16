import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ShowBalanceComponent } from './show-balance/show-balance.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawComponent } from './withdraw/withdraw.component';


const routes: Routes = [
  {
    path: 'app-create-account',
    component: CreateAccountComponent
  },
  {
    path: 'app-deposit',
    component: DepositComponent
  },
  {
    path: 'app-fund-transfer',
    component: FundTransferComponent
  },
  {
    path: 'app-show-balance',
    component: ShowBalanceComponent
  },
  {
    path: 'app-transaction',
    component: TransactionComponent
  },
  {
    path: 'app-withdraw',
    component: WithdrawComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
