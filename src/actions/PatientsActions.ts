import axios from "axios";
import { Dispatch } from "redux";
import {
  PatientsDispatchTypes,
  PATIENTS_LOADING,
  PATIENTS_SUCCESS,
  PATIENTS_FAIL,
} from "./PatientsActionTypes";
export const GetPatients =
  () => async (dispatch: Dispatch<PatientsDispatchTypes>) => {
    try {
      dispatch({ type: PATIENTS_LOADING });
      const res = await axios.get(
        "https://api-covid-tracker.herokuapp.com/patient/getAll/"
      );
      dispatch({ type: PATIENTS_SUCCESS, payload: res.data.data });
    } catch (e) {
      dispatch({ type: PATIENTS_FAIL, errMsg: e.message });
    }
  };
