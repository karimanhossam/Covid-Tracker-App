export const PATIENTS_POST_LOADING = "PATIENTS_POST_LOADING";
export const PATIENTS_POST_FAIL = "PATIENTS_POST_FAIL";
export const PATIENTS_POST_SUCCESS = "PATIENTS_POST_SUCCESS";

export type Patient_Added = {
  message: string;
};
export interface PatientsPostLoading {
  type: typeof PATIENTS_POST_LOADING;
}
export interface PatientsPostFail {
  type: typeof PATIENTS_POST_FAIL;
  errMsg: string;
}
export interface PatientsPostSuccess {
  type: typeof PATIENTS_POST_SUCCESS;
  payload: Patient_Added;
}

export type PatientsPostDispatchTypes =
  | PatientsPostLoading
  | PatientsPostFail
  | PatientsPostSuccess;
