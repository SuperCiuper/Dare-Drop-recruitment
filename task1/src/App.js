import React, { useEffect } from 'react';
import AutocompleteForm from './components/AutocompleteForm';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./state/actionCreators/usersActionCreators";


const App = () => {
  const dispatch = useDispatch()

  const getUsersFromAPI = bindActionCreators(actionCreators.getUsersFromAPI, dispatch);

  useEffect(() => {
    getUsersFromAPI("https://jsonplaceholder.typicode.com/users")
  }, []);

  return (
    <div className="App">
      <AutocompleteForm dataType = 'users'/>
    </div>
  );
}

export default App;
