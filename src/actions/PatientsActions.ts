import axios from "axios";
import { Dispatch } from "redux";
import {
  PatientsPostDispatchTypes,
  PATIENTS_POST_FAIL,
  PATIENTS_POST_LOADING,
  PATIENTS_POST_SUCCESS,
} from "./LogPatientsActionTypes";
import {
  PatientsMapDispatchTypes,
  PATIENTS_MAP_FAIL,
  PATIENTS_MAP_LOADING,
  PATIENTS_MAP_SUCCESS,
} from "./MapActionTypes";
import {
  PatientsDispatchTypes,
  PATIENTS_LOADING,
  PATIENTS_SUCCESS,
  PATIENTS_FAIL,
} from "./PatientsActionTypes";
import {
  PatientsCountriesDispatchTypes,
  PATIENTS_COUNTRIES_FAIL,
  PATIENTS_COUNTRIES_LOADING,
  PATIENTS_COUNTRIES_SUCCESS,
} from "./PatientsCountriesActionTypes";
export const GetPatients =
  () => async (dispatch: Dispatch<PatientsDispatchTypes>) => {
    try {
      dispatch({ type: PATIENTS_LOADING });
      const res = await axios.get(
        "https://api-covid-tracker.herokuapp.com/patient/getAll/"
      );
      dispatch({ type: PATIENTS_SUCCESS, payload: res.data.patients });
    } catch (e) {
      dispatch({ type: PATIENTS_FAIL, errMsg: e.message });
    }
  };

export const GetPatientsByCountry =
  (countryName: string) =>
  async (dispatch: Dispatch<PatientsCountriesDispatchTypes>) => {
    try {
      dispatch({ type: PATIENTS_COUNTRIES_LOADING });
      const res = await axios.get(
        "https://api-covid-tracker.herokuapp.com/patient/getByCountry/" +
          countryName
      );
      console.log(res.data);
      dispatch({
        type: PATIENTS_COUNTRIES_SUCCESS,
        payload: res.data.patients,
      });
    } catch (e) {
      dispatch({ type: PATIENTS_COUNTRIES_FAIL, errMsg: e.message });
    }
  };

export const LogPatients =
  (
    first_name: string,
    email: string,
    long: number,
    lat: number,
    country: string,
    age: number,
    temperature: number,
    symptoms?: string,
    last_name?: string
  ) =>
  async (dispatch: Dispatch<PatientsPostDispatchTypes>) => {
    try {
      // if (last_name) form_data.append("last_name", last_name);
      // if (symptoms) form_data.append("symptoms", symptoms);
      dispatch({ type: PATIENTS_POST_LOADING });
      const data: any = {};
      data.first_name = first_name;
      data.email = email;
      data.age = age;
      data.longitude = long;
      data.latitude = lat;
      data.country = country;
      data.temperature = temperature;
      if (last_name !== "") data.last_name = last_name;
      if (symptoms !== "") data.symptoms = symptoms;
      console.log(data);
      const res = await axios.post(
        "https://api-covid-tracker.herokuapp.com/patient/add/",
        data
      );
      dispatch({
        type: PATIENTS_POST_SUCCESS,
        payload: res.data,
      });
      window.location.reload();
    } catch (e) {
      dispatch({ type: PATIENTS_POST_FAIL, errMsg: e.message });
    }
  };

export const GetPatientsMap =
  () => async (dispatch: Dispatch<PatientsMapDispatchTypes>) => {
    try {
      dispatch({ type: PATIENTS_MAP_LOADING });
      const res = await axios.get(
        "https://api-covid-tracker.herokuapp.com/patient/getAll/"
      );
      dispatch({ type: PATIENTS_MAP_SUCCESS, payload: res.data.patients });
    } catch (e) {
      dispatch({ type: PATIENTS_MAP_FAIL, errMsg: e.message });
    }
  };
