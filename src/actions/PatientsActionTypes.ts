export const PATIENTS_LOADING = "PATIENTS_LOADING";
export const PATIENTS_FAIL = "PATIENTS_FAIL";
export const PATIENTS_SUCCESS = "PATIENTS_SUCCESS";

export type Patient = {
  id: PatientData;
};
export type PatientData = {
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
export interface PatientsLoading {
  type: typeof PATIENTS_LOADING;
}
export interface PatientsFail {
  type: typeof PATIENTS_FAIL;
  errMsg: string;
}
export interface PatientsSuccess {
  type: typeof PATIENTS_SUCCESS;
  payload: Patient;
}

export type PatientsDispatchTypes =
  | PatientsLoading
  | PatientsFail
  | PatientsSuccess;
