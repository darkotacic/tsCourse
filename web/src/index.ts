import { User } from './models/User';

const user = new User({ name: 'My name', age: 20 });
console.log(user.get('name'));
console.log(user.get('age'));
user.set({ name: 'Darko' });
console.log(user.get('name'));
console.log(user.get('age'));
