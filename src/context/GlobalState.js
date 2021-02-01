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

  const transFers = { state, dispatch };
  console.log({ transFers });

  const transFers2 = { state2, dispatch2 };
  console.log({ transFers2 });

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
        transFers,
        transFers2,
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        // addIncome,
        // addExpense,
        // deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
