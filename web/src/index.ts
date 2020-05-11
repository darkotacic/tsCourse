import { User } from './models/User';

let user: User = new User({ name: 'new record', age: 0 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.trigger('change');
