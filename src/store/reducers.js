export const updateCurrentPage = (state, action) => ({
  ...state,
  currentPage: action.payload,
});

export const updateResultsPerPage = (state, action) => ({
  ...state,
  resultsPerPage: action.payload,
});

export const updateAllCurrentPage = (state) => ({
  currentPage: state.currentPage + 1,
});
