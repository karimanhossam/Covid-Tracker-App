import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { GetPatients } from "./actions/PatientsActions";

function App() {
  const dispatch = useDispatch();

  /** On page load fetch data to see active user logged in */
  React.useEffect(() => {
    FetchData();
  });
  const FetchData = () => {
    dispatch(GetPatients()); //calls action AuthCheckState
  };

  return <div className="App">test</div>;
}

export default App;
