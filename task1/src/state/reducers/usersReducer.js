const initialState = {
	status: "undefined",
	users: [],
	selectedUser: {},
	filteredUsers: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SELECT":
			return {
				...state,
				selectedUser: action.payload.user,
			};

		case "LOADING":
			return {
				...state,
				status: "loading",
			};

		case "LOADED":
			return {
				...state,
				users: action.payload.users,
				filteredUsers: action.payload.users,
				status: "loaded",
			};

		case "LOADING_ERROR":
			return {
				...state,
				status: "error",
			};

		case "SET_FILTERED_USERS":
			return {
				...state,
				filteredUsers: action.payload.filteredUsers,
			};

		default:
			return state;
	}
};

export default usersReducer;
