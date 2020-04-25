import { User } from './models/User';

const user = new User({ name: 'My name', age: 20 });

user.on('darko', () => {
  console.log('HELLO WORLD123123 TAMCE TAMCE');
});

user.on('darko', () => {
  console.log('HELLO WORLD1234 TAMARA');
});

user.on('darko', () => {
  console.log('HELLO WORLD TAMARA TAMCI <3 TAMCE');
});

user.trigger('darko');
