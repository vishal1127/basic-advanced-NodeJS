const express = require("express");

const expenseController = require("../controllers/expense");
const router = express.Router();

router.get("/getAllExpenses", expenseController.getAllExpenses);

router.post("/addExpense", expenseController.postExpense);

router.get("/getSingleExpense/:expenseId", expenseController.getEditExpense);

router.put("/updateExpense/:expenseId", expenseController.updateExpense);

router.delete("/deleteExpense/:expenseId", expenseController.deleteExpense);

module.exports = router;
