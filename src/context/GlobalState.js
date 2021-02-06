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

  const transFersIncome = { state, dispatch };

  const transFersExpense = { state2, dispatch2 };

  return (
    <GlobalContext.Provider
      value={{
        transFersIncome,
        transFersExpense,
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
