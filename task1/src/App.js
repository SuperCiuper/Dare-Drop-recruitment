import React, { useEffect } from "react";
import "./App.css";
import AutocompleteForm from "./components/AutocompleteForm";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./state/actionCreators/usersActionCreators";

const App = () => {
	const state = useSelector((state) => state.users.selectedUser);

	const dispatch = useDispatch();
	const getUsersFromAPI = bindActionCreators(actionCreators.getUsersFromAPI, dispatch);

	useEffect(() => {
		getUsersFromAPI("https://jsonplaceholder.typicode.com/users");
	}, []);

	return (
		<div className='App'>
			<label>Selected: {state.name}</label>
			<AutocompleteForm dataType='users' />
		</div>
	);
};

export default App;
