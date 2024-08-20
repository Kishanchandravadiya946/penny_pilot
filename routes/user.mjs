import express from 'express';
import { User } from '../mongoose/schemas/userModel.mjs'; 

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile_number: req.body.mobile_number,
    pro_bio: req.body.pro_bio,
    pro_image: req.body.pro_image,
    friend: req.body.friend 
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = req.body.name ?? user.name;
    user.email = req.body.email ?? user.email;
    user.mobile_number = req.body.mobile_number ?? user.mobile_number;
    user.pro_bio = req.body.pro_bio ?? user.pro_bio;
    user.pro_image = req.body.pro_image ?? user.pro_image;
    user.friend = req.body.friend ?? user.friend;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



export default router;
