import mongoose from "mongoose";


const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true }, 
   description: { type: String, default: '' },
  payment: {
    method: { type: String, required: true }, 
    amount: { type: Number, required: true } 
  },
  date: { type: Date, default: Date.now } 
});

export const Expense = mongoose.model('Expense', expenseSchema);


