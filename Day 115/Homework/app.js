function findMax(...numbers) {
    return Math.max(...numbers);
  }
  
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2];
  
  const user = {
    name: "Giorgi",
    lastName: "Smith",
    age: 25
  };
  
  const { name, age } = user;
  console.log(name, age);
  
  const person = {
    name: "Nika",
    lastName: "Brown",
    age: 22,
    hobby: "Football"
  };
  
  const { name: firstName, hobby } = person;
  console.log(firstName, hobby);
  console.log(person.lastName, person.age);
  