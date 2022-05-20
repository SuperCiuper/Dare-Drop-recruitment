import React, { useState } from "react";
import "./AutocompleteForm.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/actionCreators/usersActionCreators";

const AutocompleteForm = ({ dataType = "" }) => {
	const state = useSelector((state) => state[dataType]);
	const [focused, setFocus] = useState(false);
	const [filter, setFilter] = useState("");

	const dispatch = useDispatch();
	const selectUser = bindActionCreators(actionCreators.selectUser, dispatch);
	const setFilteredUsers = bindActionCreators(actionCreators.setFilteredUsers, dispatch);

	return (
		<form className='AutocompleteForm'>
			<input
				value={filter}
				type='text'
				placeholder='Name'
				onChange={(event) => {
					selectUser({});
					setFilter(event.target.value.toLowerCase());
					setFilteredUsers(state.users.filter((item) => item.name.toLowerCase().startsWith(event.target.value.toLowerCase())));
				}}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<button
				onClick={() => {
					if (Object.keys(state.selectedUser).length !== 0) alert("User data sent");
				}}
			>
				{Object.keys(state.selectedUser).length !== 0 ? "Send user data" : "No user selected"}
			</button>
			{focused && state.filteredUsers.length > 0 ? (
				<section className='AutocompleteFormList'>
					{state.filteredUsers.map((item, index) => {
						return (
							<li
								key={index}
								onMouseDown={() => {
									selectUser(item);
									setFilter(item.name);
									setFilteredUsers(state.users.filter((item) => item.name.toLowerCase().startsWith(item.name)));
								}}
							>
								{item.name}
							</li>
						);
					})}
				</section>
			) : (
				""
			)}
		</form>
	);
};

export default AutocompleteForm;
