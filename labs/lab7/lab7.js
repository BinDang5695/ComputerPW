const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countWords(sentence) {
    
  sentence = sentence.replace(/[.,!?]/g, '');

  const words = sentence.split(/\s+/);

  const wordCount = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word === '') continue;

    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

function printResult(wordCount) {
  for (let key in wordCount) {
    console.log(`${key}: ${wordCount[key]}`);
  }
}

rl.question("Enter a sentence: ", (input) => {
  const result = countWords(input);
  printResult(result);
  rl.close();
});