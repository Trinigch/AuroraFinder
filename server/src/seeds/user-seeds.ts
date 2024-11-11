import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'Aurora', password: 'password' },
    { username: 'Aurora1', password: 'password' },
    { username: 'Aurora2', password: 'password' },
  ], { individualHooks: true });
};
