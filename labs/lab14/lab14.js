class Employee {
  constructor(name) {
    this.name = name;
  }

  getSalary() {
    return 0;
  }
}

class FullTimeEmployee extends Employee {
  getSalary() {
    return 50000;
  }
}

class ContractEmployee extends Employee {
  getSalary() {
    return 40000;
  }
}

function calculateTotalSalary(employees) {
  let total = 0;

  employees.forEach(emp => {
    total += emp.getSalary();
  });

  return total;
}

function findHighestLowest(employees) {
  let highest = employees[0];
  let lowest = employees[0];

  employees.forEach(emp => {
    if (emp.getSalary() > highest.getSalary()) {
      highest = emp;
    }

    if (emp.getSalary() < lowest.getSalary()) {
      lowest = emp;
    }
  });

  return { highest, lowest };
}

const employees = [
  new FullTimeEmployee("A"),
  new FullTimeEmployee("B"),
  new FullTimeEmployee("C"),
  new ContractEmployee("D"),
  new ContractEmployee("E")
];

const total = calculateTotalSalary(employees);
console.log("Total salary:", total);

const { highest, lowest } = findHighestLowest(employees);

console.log(`Highest salary: ${highest.name} - ${highest.getSalary()}`);
console.log(`Lowest salary: ${lowest.name} - ${lowest.getSalary()}`);