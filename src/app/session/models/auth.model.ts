export interface ILoginResponse {
  token: string;
  // to be implemented
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterResponse {
  token: string;
  // to be implemented
}

export interface IRegisterPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface IForgotPayload {
  email: string;
}

export interface IForgotResponse {
  status: string;
}

export interface IValidate {
  token: string;
}
