import {
  PatientsMapDispatchTypes,
  Patient,
  PATIENTS_MAP_LOADING,
  PATIENTS_MAP_FAIL,
  PATIENTS_MAP_SUCCESS,
} from "../actions/MapActionTypes";

interface DefaultStateI {
  loading: boolean;
  patients?: Patient[];
  errMsg?: string;
}
const defaultState: DefaultStateI = { loading: false, errMsg: "" };

const mapReducer = (
  state: DefaultStateI = defaultState,
  action: PatientsMapDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case PATIENTS_MAP_LOADING:
      return {
        loading: true,
      };
    case PATIENTS_MAP_FAIL:
      return {
        loading: false,
        errMsg: action.errMsg
          ? action.errMsg
          : "Sorry cannot load patients right now",
      };
    case PATIENTS_MAP_SUCCESS:
      return {
        loading: false,
        patients: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
