import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  creator: [{
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User', 
  }],
});

export const Guest = mongoose.model('Guest', guestSchema);


