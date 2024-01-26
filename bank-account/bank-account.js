//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import ValueError from './ValueError.js';

export default class BankAccount {
  open() {
    if (this.account_balance === 0) {
      throw new ValueError();
    }
    this.account_balance = 0;
  }

  close() {
    if (this.account_balance >= 0) {
      this.account_balance = null;
    } else {
      throw new ValueError();
    }
  }

  deposit(money) {
    if (money < 0) {
      throw new ValueError();
    }
    this.account_balance = this.balance + money;
  }

  withdraw(money) {
    if (this.account_balance < money || money < 0) {
      throw new ValueError();
    }
    this.account_balance = this.balance - money;
  }

  get balance() {
    if (this.account_balance === null) {
      throw new ValueError();
    }
    return this.account_balance;
  }

  set balance(balance) {
    if (this.account_balance === 0 || this.account_balance === null) {
      throw new ValueError();
    }
    this.account_balance = balance;
  }
}
