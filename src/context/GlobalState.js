import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [],
  expenseTransactions: [],
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [state2, dispatch2] = useReducer(AppReducer, initialState);

  // console.log({ state });

  const transFersIncome = { state, dispatch };
  // console.log({ transFersIncome });

  const transFersExpense = { state2, dispatch2 };
  // console.log({ transFersExpense });

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };

  const addExpense = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transFersIncome,
        transFersExpense,
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
