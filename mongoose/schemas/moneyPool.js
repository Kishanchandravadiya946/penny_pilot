import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const moneyPoolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  amount:{
    type: Number,
    required: true,
  },
  description:{
    type: String,
  },
  creator: [{
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User' 
  }],
});

export const MoneyPool = mongoose.model('MoneyPool', moneyPoolSchema);


