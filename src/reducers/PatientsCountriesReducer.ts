import {
  PatientsCountriesDispatchTypes,
  Patient,
  PATIENTS_COUNTRIES_LOADING,
  PATIENTS_COUNTRIES_FAIL,
  PATIENTS_COUNTRIES_SUCCESS,
} from "../actions/PatientsCountriesActionTypes";

interface DefaultStateI {
  loading: boolean;
  patients?: Patient[];
  errMsg?: string;
}
const defaultState: DefaultStateI = { loading: false, errMsg: "" };

const patientCountriesReducer = (
  state: DefaultStateI = defaultState,
  action: PatientsCountriesDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case PATIENTS_COUNTRIES_LOADING:
      return {
        loading: true,
      };
    case PATIENTS_COUNTRIES_FAIL:
      return {
        loading: false,
        errMsg: action.errMsg
          ? action.errMsg
          : "Sorry cannot load patients right now",
      };
    case PATIENTS_COUNTRIES_SUCCESS:
      return {
        loading: false,
        patients: action.payload,
      };
    default:
      return state;
  }
};

export default patientCountriesReducer;
