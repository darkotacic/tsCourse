import { User } from './models/User';
import axios from 'axios';

let user: User = new User({ name: 'new record', age: 0 });

user.on('change', () => {
  console.log('user was changed');
});
