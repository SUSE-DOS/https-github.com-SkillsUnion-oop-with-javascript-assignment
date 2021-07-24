// ATM class as per the assignment
class ATM {
  constructor(typeInput, money = 0) {
    this.type = typeInput;
    this.money = money;
    this.transactionHistory = [];
  }

  withdraw(withdrawAmount = 0) {
    this.money -= withdrawAmount;
    this.transactionHistory.push(`Withdrawn £${withdrawAmount}`);
    console.log(`Your balance decreased by £${withdrawAmount}.`);
  }

  deposit(depositAmount = 0) {
    this.money += depositAmount;
    this.transactionHistory.push(`Deposited £${depositAmount}`);
    console.log(`Your balance increased by £${depositAmount}.`);
  }

  showBalance() {
    return `Your balance is £${this.money}`;
  }
}

/*
Usage examples
To create a new account using the console
const myAccount = new ATM("checking");

To withdraw money from the account using the browser console
myAccount.withdraw(60);

To deposit money from the account unsing the browser console
myAccount.deposit(80);

To show balance of the account using the browser console
myAccount.showBalance();

To show the transactionHistory array using the browser console
myAccount.transactionHistory;
*/
