

import express from 'express';
import { Expense } from '../mongoose/schemas/expense.mjs'; 

const router = express.Router();


router.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/expenses/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (expense == null) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/expenses', async (req, res) => {
  const expense = new Expense({
    amount: req.body.amount,
    category: req.body.category,
    description: req.body.description,
    payment: {
      method: req.body.payment.method,
      amount: req.body.payment.amount,
    },
    date: req.body.date || Date.now()
  });

  try {
    const newExpense = await expense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/expenses/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (expense == null) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    expense.amount = req.body.amount ?? expense.amount;
    expense.category = req.body.category ?? expense.category;
    expense.description = req.body.description ?? expense.description;
    expense.payment.method = req.body.payment?.method ?? expense.payment.method;
    expense.payment.amount = req.body.payment?.amount ?? expense.payment.amount;
    expense.date = req.body.date ?? expense.date;

    const updatedExpense = await expense.save();
    res.json(updatedExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/expenses/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (expense == null) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    // await expense.remove();
    await expense.deleteOne({_id:req.params.id})
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
