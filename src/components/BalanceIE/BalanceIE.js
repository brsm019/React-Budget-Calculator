import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./BalanceIncome.module.css";

function BalanceIncome() {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts.reduce((a, b) => a + b, 0);

  const totalExpense = expenseAmounts.reduce((a, b) => a + b, 0);

  console.log(incomeTransactions);

  return (
    <div className={styles.container}>
      <div className={styles.balanceIncome}>
        <h5 className={styles.income}>Income</h5>
        <h1 className={styles.incomeAmount}>+£{totalIncome}</h1>
      </div>
      <div className={styles.balanceExpenditure}>
        <h5 className={styles.expenditure}>Expenditure</h5>
        <h1 className={styles.expenditureAmount}>-£{totalExpense}</h1>
      </div>
    </div>
  );
}

export default BalanceIncome;
