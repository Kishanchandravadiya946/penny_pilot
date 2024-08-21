import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const expenseGroupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
  },
  creator: [{
    type: mongoose.Types.ObjectId,
    ref: 'User' 
  }],
});

export const ExpenseGroup = mongoose.model('ExpenseGroup', expenseGroupSchema);


