const readline = require('readline');

const account1 = {
  accountNumber: "123456",
  routingNumber: "AAA111",
  balance: 1000
};

const account2 = {
  ...account1,
  accountNumber: "789012"
};

const bankAccounts = [account1, account2];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function findAccount(accountNumber) {
  return bankAccounts.find(acc => acc.accountNumber === accountNumber);
}

function showAccount(account) {
  console.log(`Account Number: ${account.accountNumber}`);
  console.log(`Balance: ${account.balance}`);
}

function withdraw(account, amount) {
  if (amount > account.balance) {
    console.log("❌ Not enough balance!");
  } else {
    account.balance -= amount;
    console.log(`✅ Withdraw successful. New balance: ${account.balance}`);
  }
}

function deposit(account, amount) {
  if (amount <= 0 || isNaN(amount)) {
    console.log("❌ Invalid amount!");
    return;
  }

  account.balance += amount;
  console.log(`✅ Deposit successful. New balance: ${account.balance}`);
}

function showMenu() {
  console.log("\n=== Banking Application ===");
  console.log("1. Find an account");
  console.log("2. Withdraw money");
  console.log("3. Deposit money");
  console.log("0. Exit");
}

function startApp() {
  showMenu();

  rl.question("Choose an option: ", (choice) => {
    switch (choice) {

      case "1":
        rl.question("Enter account number: ", (accNum) => {
          const account = findAccount(accNum);

          if (account) {
            showAccount(account);
          } else {
            console.log("❌ Account not found!");
          }

          startApp();
        });
        break;

      case "2":
        rl.question("Enter account number: ", (accNum) => {
          const account = findAccount(accNum);

          if (!account) {
            console.log("❌ Account not found!");
            return startApp();
          }

          rl.question("Enter amount to withdraw: ", (amount) => {
            withdraw(account, parseFloat(amount));
            startApp();
          });
        });
        break;

        case "3":
        rl.question("Enter account number: ", (accNum) => {
          const account = findAccount(accNum);

        if (!account) {
            console.log("❌ Account not found!");
            return startApp();
        }

        rl.question("Enter amount to deposit: ", (amount) => {
            deposit(account, parseFloat(amount));
            startApp();
          });
        });
        break;

      case "0":
        console.log("👋 Exit program");
        rl.close();
        break;

      default:
        console.log("❌ Invalid choice!");
        startApp();
    }
  });
}

startApp();