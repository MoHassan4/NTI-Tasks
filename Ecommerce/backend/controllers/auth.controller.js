import User from '../models/User.js';
import jwt from 'jsonwebtoken';

//register
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    console.log(username, email, password);
    const user = await User.create({ username, email, password });
    res.json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ message: "User already exists" });
  }
};

//login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email});
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Wrong password' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, 'secret123');
    res.json({message: "User Founded", token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};