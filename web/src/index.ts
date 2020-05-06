import { User } from './models/User';
import axios from 'axios';

let user: User = new User({ name: 'new record', age: 0 });

user.events.on('change', () => {
  console.log('CHANGE!123');
});

user.events.trigger('change');
