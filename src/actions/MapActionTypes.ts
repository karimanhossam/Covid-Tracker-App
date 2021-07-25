export const PATIENTS_MAP_LOADING = "PATIENTS_MAP_LOADING";
export const PATIENTS_MAP_FAIL = "PATIENTS_MAP_FAIL";
export const PATIENTS_MAP_SUCCESS = "PATIENTS_MAP_SUCCESS";

export type Patient = {
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  country: string;
  longitude: number;
  latitude: number;
  temperature: number;
  symptoms: string;
};
export interface PatientsMapLoading {
  type: typeof PATIENTS_MAP_LOADING;
}
export interface PatientsMapFail {
  type: typeof PATIENTS_MAP_FAIL;
  errMsg: string;
}
export interface PatientsMapSuccess {
  type: typeof PATIENTS_MAP_SUCCESS;
  payload: Patient[];
}

export type PatientsMapDispatchTypes =
  | PatientsMapLoading
  | PatientsMapFail
  | PatientsMapSuccess;
