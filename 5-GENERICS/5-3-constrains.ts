interface Employee {
  pay(): void;
}
class FullTimeEmployee implements Employee {
  pay(): void {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  worKPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 🚫
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}
const keng = new FullTimeEmployee();
const bob = new PartTimeEmployee();

keng.workFullTime();
bob.worKPartTime();

const kengAfterPay = pay(keng);
const bobAfterPay = pay(bob);

const obj = {
  name: "keng",
  age: 123,
};
console.log(obj.name);

const obj2 = {
  animal: "dog",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name")); // keng
console.log(getValue(obj2, "animal")); // dog
