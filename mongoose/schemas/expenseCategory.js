import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const expenseCategorySchema = new mongoose.Schema({
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

export const ExpenseCategory = mongoose.model('ExpenseCategory', expenseCategorySchema);


