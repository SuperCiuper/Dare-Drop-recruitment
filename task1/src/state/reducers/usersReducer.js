const initialState = {
  status: "undefined",
  users: [],
};

const filterState = (state, trimValue, trimType) => {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        status: "loading",
      };

    case "LOADED":
      return {
        users: action.payload.users,
        status: "loaded",
      };

    case "LOADING_ERROR":
      return {
        ...state,
        status: "error",
      };

    case "FILTER":
      return filterState(
        state,
        action.payload.filterValue,
        action.payload.filterType
      );

    default:
      return state;
  }
};

export default usersReducer;
