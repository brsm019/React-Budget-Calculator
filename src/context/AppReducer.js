function AppReducer(state, action) {
  switch (action.type) {
    case "FETCH_INCOME_DATA":
      return {
        ...state,
        incomeTransactions: action.payload,
      };
    case "FETCH_EXPENSE_DATA":
      return {
        expenseTransactions: action.payload,
      };
    // case "ADD_INCOME":
    //   return {
    //     ...state,
    //     incomeTransactions: [action.payload, ...state.incomeTransactions],
    //   };
    // case "ADD_EXPENSE":
    //   return {
    //     ...state,
    //     expenseTransactions: [action.payload, ...state.expenseTransactions],
    //   };
    // case "DELETE_TRANSACTION":
    // return {
    //   ...state,
    //   incomeTransactions: state.incomeTransactions.filter(
    //     (incomeTransaction) => incomeTransaction.id !== action.payload
    //   ),
    //   expenseTransactions: state.expenseTransactions.filter(
    //     (expenseTransaction) => expenseTransaction.id !== action.payload
    //   ),
    // };
    default:
      return state;
  }
}

export default AppReducer;
