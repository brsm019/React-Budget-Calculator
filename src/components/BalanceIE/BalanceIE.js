import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./BalanceIncome.module.css";

function BalanceIncome() {
  const { transFersIncome, transFersExpense } = useContext(GlobalContext);

  const { state, dispatch } = transFersIncome;
  const { state2, dispatch2 } = transFersExpense;

  useEffect(() => {
    const fetchIncomeData = async () => {
      const res = await fetch("http://localhost:5432/income");
      const data = await res.json();
      return dispatch({
        type: "FETCH_INCOME_DATA",
        payload: data.payload,
      });
    };
    fetchIncomeData();
  }, []);

  // console.log(state.incomeTransactions);

  const incomeAmounts = state.incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeamount
  );

  const totalIncome = incomeAmounts.reduce((a, b) => a + b, 0).toFixed(2);

  useEffect(() => {
    const fetchExpenseData = async () => {
      const res = await fetch("http://localhost:5432/expense");
      const data = await res.json();
      return dispatch2({
        type: "FETCH_EXPENSE_DATA",
        payload: data.payload,
      });
    };
    fetchExpenseData();
  }, []);

  const expenseAmounts = state2.expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseamount
  );

  const totalExpense = expenseAmounts.reduce((a, b) => a + b, 0).toFixed(2);

  // console.log(incomeTransactions);

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
