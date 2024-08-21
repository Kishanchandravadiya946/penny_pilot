import mongoose from 'mongoose';
import { Schema } from 'mongoose';
// import AutoIncrementFactory from 'mongoose-sequence';

// const AutoIncrement = AutoIncrementFactory(mongoose);
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
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid mobile number']
  },
  proImage: {
    type: String, 
    default: ''
  },
  date: {
    type: Date,
    default: Date.now()
  },
  friends: [{
    type: mongoose.Types.ObjectId,
    ref: 'User' 
  }],
  dummyFriends: [{
    type: mongoose.Types.ObjectId,
    ref: 'Guest' 
  }]
});

// userSchema.plugin(AutoIncrement,{inc_field:'_id',start_seq:1});
export const User = mongoose.model('User', userSchema);


