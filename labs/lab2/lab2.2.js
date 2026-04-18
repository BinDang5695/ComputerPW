const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askNumber() {
  rl.question("Enter a number: ", (input) => {
    const value = input.trim();

    if (value === "") {
      console.log("❌ Error: Input cannot be empty\n");
      return askNumber();
    }

    const num = Number(value);

    if (isNaN(num)) {
      console.log("❌ Error: Invalid number (contains characters)\n");
      return askNumber();
    }

    if (!Number.isInteger(num)) {
      console.log("❌ Error: Please enter an integer\n");
      return askNumber();
    }

    if (num % 2 === 0) {
      console.log("✅ Even number");
    } else {
      console.log("✅ Odd number");
    }

    rl.close();
  });
}

askNumber();