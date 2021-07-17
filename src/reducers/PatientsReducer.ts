import {
  PatientsDispatchTypes,
  Patient,
  PATIENTS_LOADING,
  PATIENTS_FAIL,
  PATIENTS_SUCCESS,
} from "../actions/PatientsActionTypes";

interface DefaultStateI {
  loading: boolean;
  patients?: Patient[];
  errMsg?: string;
}
const defaultState: DefaultStateI = { loading: false, errMsg: "" };

const patientReducer = (
  state: DefaultStateI = defaultState,
  action: PatientsDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case PATIENTS_LOADING:
      return {
        loading: true,
      };
    case PATIENTS_FAIL:
      return {
        loading: false,
        errMsg: action.errMsg
          ? action.errMsg
          : "Sorry cannot load patients right now",
      };
    case PATIENTS_SUCCESS:
      return {
        loading: false,
        patients: action.payload,
      };
    default:
      return state;
  }
};

export default patientReducer;
