import { combineReducers } from "redux";
import mapReducer from "./MapReducer";
import patientCountriesReducer from "./PatientsCountriesReducer";
import patientLogReducer from "./PatientsLogReducer";
import patientReducer from "./PatientsReducer";
const RootReducer = combineReducers({
  patients: patientReducer,
  patients_country: patientCountriesReducer,
  patients_log: patientLogReducer,
  map: mapReducer,
});

export default RootReducer;
