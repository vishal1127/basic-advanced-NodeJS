const Expense = require("../models/expense");

exports.getAllExpenses = (req, res, next) => {
  Expense.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      return err;
    });
};

exports.postExpense = (req, res, next) => {
  const desc = req.body.description;
  const amt = req.body.amount;
  const cat = req.body.category;
  Expense.create({
    description: desc,
    amount: amt,
    category: cat,
  }).then(res.send("Expense added successfully"));
};

exports.getEditExpense = (req, res, next) => {
  const expenseId = req.params.expenseId;
  Expense.findByPk(expenseId)
    .then((expense) => res.json(expense))
    .catch((err) => res.send("error", err));
};

exports.updateExpense = (req, res, next) => {
  const expenseId = req.params.expenseId;
  const newDescription = req.body.description;
  const newAmount = req.body.amount;
  const newCategory = req.body.category;
  Expense.findByPk(expenseId)
    .then((expense) => {
      (expense.description = newDescription),
        (expense.amount = newAmount),
        (expense.category = newCategory);
      return expense.save();
    })
    .then(() => res.send("Edited successfuly"))
    .catch((err) => res.send("error", err));
};

exports.deleteExpense = (req, res, next) => {
  const expenseId = req.params.expenseId;
  Expense.destroy({
    where: {
      id: expenseId,
    },
  })
    .then(res.send("deleted successfully"))
    .catch((err) => res.send("error", err));
};
