import {
  PatientsPostDispatchTypes,
  Patient_Added,
  PATIENTS_POST_LOADING,
  PATIENTS_POST_FAIL,
  PATIENTS_POST_SUCCESS,
} from "../actions/LogPatientsActionTypes";

interface DefaultStateI {
  loading: boolean;
  patients?: Patient_Added;
  errMsg?: string;
}
const defaultState: DefaultStateI = { loading: false, errMsg: "" };

const patientLogReducer = (
  state: DefaultStateI = defaultState,
  action: PatientsPostDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case PATIENTS_POST_LOADING:
      return {
        loading: true,
      };
    case PATIENTS_POST_FAIL:
      return {
        loading: false,
        errMsg: action.errMsg
          ? action.errMsg
          : "Sorry cannot report patients right now",
      };
    case PATIENTS_POST_SUCCESS:
      return {
        loading: false,
        patients: action.payload,
      };
    default:
      return state;
  }
};

export default patientLogReducer;
