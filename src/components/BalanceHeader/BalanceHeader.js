import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./BalanceHeader.module.css";

function BalanceHeader() {
  const { transFersIncome, transFersExpense } = useContext(GlobalContext);

  const { state, dispatch } = transFersIncome;
  const { state2, dispatch2 } = transFersExpense;

  useEffect(() => {
    const fetchIncomeData = async () => {
      const res = await fetch("http://localhost:5000/income");
      const data = await res.json();
      return dispatch({
        type: "FETCH_INCOME_DATA",
        payload: data.payload,
      });
    };
    fetchIncomeData();
  }, []);

  const incomeAmounts = state.incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeamount
  );

  const totalIncome = incomeAmounts.reduce((a, b) => a + b, 0).toFixed(2);

  useEffect(() => {
    const fetchExpenseData = async () => {
      const res = await fetch("http://localhost:5000/expense");
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

  const balance = (totalIncome - totalExpense).toFixed(2);

  // console.log(balance);

  return (
    <div className={styles.balanceHeader}>
      <h5 className={styles.balanceHeaderH5}>Your Balance</h5>
      <h1 className={styles.balanceHeaderH1}>£{balance}</h1>
    </div>
  );
}

export default BalanceHeader;
