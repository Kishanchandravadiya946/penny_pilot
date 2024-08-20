import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  mobile_number: {
    type: String,
    required: true,
    unique: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid mobile number']
  },
  pro_bio: {
    type: String,
    default: ''
  },
  pro_image: {
    type: String, // This might be a URL or a path to the image
    default: ''
  },
  date: {
    type: Date,
    default: Date.now
  },
  friend: [{
    type: Schema.Types.ObjectId,
    ref: 'User' // Assuming 'User' is the name of the model for users
  }]
});

// Create the model
export const User = mongoose.model('User', userSchema);


