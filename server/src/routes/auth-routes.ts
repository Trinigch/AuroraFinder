import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {

      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1h',
    });

    return res.json({ token });
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).json({ message: 'Login failed' });
  }
};
export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    console.log(User);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

   
    // create new user
    const newUser = await User.create({ username, password });

    // token JWT
    const token = jwt.sign({ username: newUser.username }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1h',
    });

    return res.status(201).json({ token });

  } catch (err) {
    console.error('Error during signup:', err);
    return res.status(500).json({ message: 'Signup failed' });
  }
};

const router = Router();
router.post('/login', login);
router.post('/signup', signup);

export default router;