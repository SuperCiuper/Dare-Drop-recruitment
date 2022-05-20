export const loadingUsers = () => {
	return (dispatch) => {
		dispatch({
			type: "LOADING",
		});
	};
};

export const selectUser = (user) => {
	return (dispatch) => {
		dispatch({
			type: "SELECT",
			payload: {
				user: user,
			},
		});
	};
};

export const setFilteredUsers = (filteredUsers) => {
	return (dispatch) => {
		dispatch({
			type: "SET_FILTERED_USERS",
			payload: {
				filteredUsers: filteredUsers,
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
