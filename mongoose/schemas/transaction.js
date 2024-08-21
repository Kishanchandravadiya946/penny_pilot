import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Income', 'Expense'],
    required: true,
  },
  amount: {
    type: Number,
    required : true,
  },
  dateTime: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  moneyPool: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'MoneyPool',
  },
  category: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'ExpenseCategory',
  },
  group: {
    type: mongoose.Types.ObjectId,
    ref: 'ExpenseGroup',
  },
  friend: [{
    type: mongoose.Types.ObjectId,
    ref: 'User' 
  }],
  dummyFriend: [{
    type: mongoose.Types.ObjectId,
    ref: 'Guest' 
  }]
})

