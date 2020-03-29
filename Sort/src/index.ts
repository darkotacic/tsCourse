import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 50]);
const charactersCollection = new CharactersCollection('XaaybZLKG');
const linkedList = new LinkedList();
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
