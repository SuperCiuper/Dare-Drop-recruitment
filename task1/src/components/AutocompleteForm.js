import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/actionCreators/usersActionCreators";


const AutocompleteForm = ({ dataType = "" }) => {
  const state = useSelector((state) => state[dataType]);
  const dispatch = useDispatch();

  const filterUser = bindActionCreators(actionCreators.filterUser, dispatch);

  console.log(state);

  return (
    <section>
      <button onClick={() => console.log("click")}>1231823781923789</button>
    </section>
  );
};

export default AutocompleteForm;
