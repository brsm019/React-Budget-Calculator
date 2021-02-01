import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./BalanceHeader.module.css";

function BalanceHeader() {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  // const incomeAmounts = incomeTransactions.map(
  //   (incomeTransaction) => incomeTransaction.incomeAmount
  // );

  // const expenseAmounts = expenseTransactions.map(
  //   (expenseTransaction) => expenseTransaction.expenseAmount
  // );

  // const totalIncome = incomeAmounts.reduce((a, b) => a + b, 0).toFixed(2);

  // const totalExpense = expenseAmounts.reduce((a, b) => a + b, 0).toFixed(2);

  // const balance = (totalIncome - totalExpense).toFixed(2);

  // console.log(balance);

  return (
    <div className={styles.balanceHeader}>
      <h5 className={styles.balanceHeaderH5}>Your Balance</h5>
      <h1 className={styles.balanceHeaderH1}>£{/* {balance} */}</h1>
    </div>
  );
}

export default BalanceHeader;
