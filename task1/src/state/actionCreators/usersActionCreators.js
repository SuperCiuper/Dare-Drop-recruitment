export const loadingUsers = () => {
  return (dispatch) => {
    dispatch({
      type: "LOADING",
    });
  };
};

export const filterUser = (filterValue, filterType) => {
  return (dispatch) => {
    dispatch({
      type: "FILTER",
      payload: {
        filterValue: filterValue,
        filterType: filterType,
      },
    });
  };
};

export const getUsersFromAPI = (url = "") => {

  return (dispatch) => {
    dispatch(loadingUsers());
    return fetch(url)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "LOADED",
          payload: {
            users: json,
          },
        })
      )
      .catch((err) =>
        dispatch({
          type: "LOADING_ERROR",
        })
      );
  };
};
