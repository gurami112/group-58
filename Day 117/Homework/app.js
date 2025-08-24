class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  think() {
    console.log(`${this.name} Is Thinking`);
  }
}

class Student extends Person {
  constructor(name, surname, gradeLevel) {
    super(name, surname);
    this.gradeLevel = gradeLevel;
  }

  study(subject) {
    console.log(`${this.name} is studying ${subject} and their grade is ${this.gradeLevel}`);
  }
}

let student1 = new Student("Luka", "Megrelishvili", 10);
student1.think();
student1.study("Math");




// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.energyLevel = 100;
//   }

//   run() {
//     this.energyLevel -= 10;
//     console.log(`Dog named ${this.name} Is now Running which means that it has lost 10 energy and it's energy Level now is ${this.energyLevel}`);
//   }

//   rest() {
//     this.energyLevel += 5;
//     console.log(`Dog named ${this.name} Is now resting which means that it's energy Level is now ${this.energyLevel}`);
//   }

//   showStatus() {
//     console.log(`Dog's name is ${this.name}, age is ${this.age}, and energy level is ${this.energyLevel}`);
//   }
// }

// let dog1 = new Dog("Rex", 3);
// dog1.run();
// dog1.rest();
// dog1.showStatus();
