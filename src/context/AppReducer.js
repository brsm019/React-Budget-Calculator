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
    default:
      return state;
  }
}

export default AppReducer;
