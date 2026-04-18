let intArr = [1, 2, 3, 4, 5];

let evenCount = intArr.filter(num => num % 2 === 0).length;
let oddCount = intArr.filter(num => num % 2 !== 0).length;

console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);