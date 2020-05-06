import { User } from './models/User';
import axios from 'axios';

let user: User = new User({ id: 1 });

user.set({ name: 'NEW NAME13', age: 50 });

let user2: User = new User({ name: 'Darko123', age: 0 });

user.save();
