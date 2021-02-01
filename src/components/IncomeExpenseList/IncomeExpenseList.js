import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./IncomeExpenseList.module.css";

function IncomeExpenseList() {
  const {
    incomeTransactions,
    deleteTransaction,
    expenseTransactions,
  } = useContext(GlobalContext);

  console.log(incomeTransactions);

  return (
    <div className={styles.wrapper}>
      <div className={styles.transactionsIncome}>
        <h5 className={styles.title}>Transaction History</h5>
        <ul className={styles.transactionList}>
          {incomeTransactions.map((incomeTransaction) => (
            <li className={styles.transaction} key={incomeTransaction.id}>
              <span className={styles.transactionText}>
                {incomeTransaction.incomeText}
              </span>
              <span className={styles.transactionAmount}>
                {incomeTransaction.incomeAmount}
                <button
                  className={styles.deleteBtn}
                  onClick={() => deleteTransaction(incomeTransaction.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.transactionsExpense}>
        <h5 className={styles.title2}>Transaction History</h5>
        <ul className={styles.transactionList}>
          {expenseTransactions.map((expenseTransaction) => (
            <li className={styles.transaction2} key={expenseTransaction.id}>
              <span className={styles.transactionText2}>
                {expenseTransaction.expenseText}
              </span>
              <span className={styles.transactionAmount2}>
                {expenseTransaction.expenseAmount}
                <button
                  className={styles.deleteBtn2}
                  onClick={() => deleteTransaction(expenseTransaction.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IncomeExpenseList;
