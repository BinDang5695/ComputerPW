class BankingAccount {
  constructor(initialBalance = 0) {
    if (new.target === BankingAccount) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.balance = initialBalance;
  }

  deposit(amount) {
    throw new Error("Method 'deposit()' must be implemented");
  }

  withdraw(amount) {
    throw new Error("Method 'withdraw()' must be implemented");
  }

  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankingAccount {
  deposit(amount) {
    if (amount <= 0) {
      console.log("❌ Invalid deposit amount");
      return;
    }
    this.balance += amount;
    console.log(`✅ Deposit: ${amount}, Balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("❌ Not enough balance");
      return;
    }
    this.balance -= amount;
    console.log(`✅ Withdraw: ${amount}, Balance: ${this.balance}`);
  }
}

class CheckingAccount extends BankingAccount {
  constructor(initialBalance = 0, minimumBalance = 50) {
    super(initialBalance);
    this.minimumBalance = minimumBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("❌ Invalid deposit amount");
      return;
    }
    this.balance += amount;
    console.log(`✅ Deposit: ${amount}, Balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance - amount < this.minimumBalance) {
      console.log(`❌ Cannot withdraw. Must keep at least ${this.minimumBalance}`);
      return;
    }

    this.balance -= amount;
    console.log(`✅ Withdraw: ${amount}, Balance: ${this.balance}`);
  }
}

const savingAcc = new SavingsAccount(100);
const checkingAcc = new CheckingAccount(100, 50);

console.log("\n=== Savings Account ===");
savingAcc.deposit(50);
savingAcc.withdraw(30);
savingAcc.withdraw(200);
console.log("Balance:", savingAcc.getBalance());

console.log("\n=== Checking Account ===");
checkingAcc.deposit(50);
checkingAcc.withdraw(70);
checkingAcc.withdraw(50);
console.log("Balance:", checkingAcc.getBalance());