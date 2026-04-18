class Animal {
  constructor(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
  }

  getSpeed() {
    return Math.floor(Math.random() * this.maxSpeed) + 1;
  }
}

const horse = new Animal("Horse", 75);
const tiger = new Animal("Tiger", 100);
const dog = new Animal("Dog", 60);

const animals = [horse, tiger, dog];

let winner = null;
let maxSpeed = 0;

animals.forEach(animal => {
  const speed = animal.getSpeed();
  console.log(`${animal.name} speed: ${speed}`);

  if (speed > maxSpeed) {
    maxSpeed = speed;
    winner = animal.name;
  }
});

console.log(`\n🏆 Winner is ${winner}, with speed: ${maxSpeed}`);