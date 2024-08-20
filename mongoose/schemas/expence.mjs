// const mongoose = require('mongoose');
// const { Schema } = mongoose;
import mongoose from "mongoose";

// Expense Schema
const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true }, // Assuming category is a string
  description: { type: String, default: '' },
  payment: {
    method: { type: String, required: true }, // Payment method (e.g., 'Credit Card', 'Cash')
    amount: { type: Number, required: true } // Payment amount
  },
  date: { type: Date, default: Date.now } // Date of the expense
});

export const Expense = mongoose.model('Expense', expenseSchema);


