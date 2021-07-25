export const PATIENTS_COUNTRIES_LOADING = "PATIENTS_COUNTRIES_LOADING";
export const PATIENTS_COUNTRIES_FAIL = "PATIENTS_COUNTRIES_FAIL";
export const PATIENTS_COUNTRIES_SUCCESS = "PATIENTS_COUNTRIES_SUCCESS";

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
export interface PatientsCountriesLoading {
  type: typeof PATIENTS_COUNTRIES_LOADING;
}
export interface PatientsCountriesFail {
  type: typeof PATIENTS_COUNTRIES_FAIL;
  errMsg: string;
}
export interface PatientsCountriesSuccess {
  type: typeof PATIENTS_COUNTRIES_SUCCESS;
  payload: Patient[];
}

export type PatientsCountriesDispatchTypes =
  | PatientsCountriesLoading
  | PatientsCountriesFail
  | PatientsCountriesSuccess;
