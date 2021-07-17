import { combineReducers } from "redux";
import patientReducer from "./PatientsReducer";
const RootReducer = combineReducers({ patients: patientReducer });

export default RootReducer;
