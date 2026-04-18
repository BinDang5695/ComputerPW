const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter height (m): ", (height) => {
  rl.question("Enter weight (kg): ", (weight) => {

    height = parseFloat(height);
    weight = parseFloat(weight);

    const bmi = weight / (height * height);

    console.log(`Your BMI is: ${bmi.toFixed(2)}`);

    if (bmi < 18.5) {
      console.log("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log("Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      console.log("Overweight");
    } else {
      console.log("Obesity");
    }

    rl.close();
  });
});