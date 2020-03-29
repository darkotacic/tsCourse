"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 50]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('XaaybZLKG');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
//Sort
numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
//Print
linkedList.print();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
