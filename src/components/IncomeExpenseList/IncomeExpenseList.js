import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./IncomeExpenseList.module.css";

function IncomeExpenseList() {
  const { transFersIncome, transFersExpense } = useContext(GlobalContext);

  const { state, dispatch } = transFersIncome;
  const { state2, dispatch2 } = transFersExpense;

  const fetchIncomeData = async () => {
    const res = await fetch("http://localhost:5000/income");
    const data = await res.json();
    return dispatch({
      type: "FETCH_INCOME_DATA",
      payload: data.payload,
    });
  };

  const fetchExpenseData = async () => {
    const res = await fetch("http://localhost:5000/expense");
    const data = await res.json();
    return dispatch2({
      type: "FETCH_EXPENSE_DATA",
      payload: data.payload,
    });
  };

  useEffect(() => {
    fetchIncomeData();
  }, []);

  useEffect(() => {
    fetchExpenseData();
  }, []);

  async function deleteButtonIncome(id) {
    let res = await fetch(`http://localhost:5000/income/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    fetchIncomeData();
  }

  async function deleteButtonExpense(id) {
    let res = await fetch(`http://localhost:5000/expense/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    fetchExpenseData();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.transactionsIncome}>
        <h5 className={styles.title}>Transaction History</h5>
        <ul className={styles.transactionList}>
          {transFersIncome.state.incomeTransactions.map((incomeTransaction) => (
            <li className={styles.transaction} key={incomeTransaction.id}>
              <span className={styles.transactionText}>
                {incomeTransaction.incometext}
              </span>
              <span className={styles.transactionAmount}>
                {incomeTransaction.incomeamount}
                <button
                  className={styles.deleteBtn}
                  onClick={() => deleteButtonIncome(incomeTransaction.id)}
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
          {transFersExpense.state2.expenseTransactions.map(
            (expenseTransaction) => (
              <li className={styles.transaction2} key={expenseTransaction.id}>
                <span className={styles.transactionText2}>
                  {expenseTransaction.expensetext}
                </span>
                <span className={styles.transactionAmount2}>
                  {expenseTransaction.expenseamount}
                  <button
                    className={styles.deleteBtn2}
                    onClick={() => deleteButtonExpense(expenseTransaction.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default IncomeExpenseList;
