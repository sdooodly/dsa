function BankAccount(name){
  this.name = name;
  let balance = 0;

  this.deposit = (amount) => {
    balance += amount;
    console.log(`${name} deposited ${amount}. New balance: ${balance}`);
  };
  this.withdraw = (amount) => {
    balance -= amount;
    console.log(`${name} withdrew ${amount}. New balance: ${balance}`);
  };
};

class SavingsAccount extends BankAccount {
  constructor(name, interestRate) {
    super(name);
    this.interestRate = interestRate;
  }
  calculateInterest() {
    const interest = this.balance + this.interestRate;
    console.log(`${this.name}'s interest earned: ${interest}`);
  }
}

const checkingAccount = new BankAccount("ge Doe");
checkingAccount.deposit(100);
checkingAccount.withdraw(50);

const savingsAccount = new SavingsAccount("Jane Doe", 0.01);
savingsAccount.deposit(200);
savingsAccount.calculateInterest();
savingsAccount.withdraw(100);
