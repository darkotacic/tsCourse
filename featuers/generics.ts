class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

//Example of generics with functions

function printStrings(arr: string[]): void {
  for (let elem in arr) {
    console.log(elem);
  }
}

function printNumbers(arr: number[]): void {
  for (let elem in arr) {
    console.log(elem);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let elem in arr) {
    console.log(elem);
  }
}

printAnything<string>(['a', 'b', 'c']);

// Generic Constrains

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
