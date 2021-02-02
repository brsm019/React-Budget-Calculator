import React, { useState, useEffect } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import BalanceHeader from "./components/BalanceHeader/BalanceHeader";
import BalanceIE from "./components/BalanceIE/BalanceIE";
import Header from "./components/Header/Header";
import IncomeExpenseList from "./components/IncomeExpenseList/IncomeExpenseList";
import { GlobalContextProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <BalanceIE />
          <Header />
          <BalanceHeader />
          <AddTransaction />
          <IncomeExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
