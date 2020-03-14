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


export interface TokenPair{
  jwt:string;
  refreshToken:string; 
}
//^ am facut eu o interfata care sa contina JWT-ul si refreshToken-ul, nu sunt sigur daca
// trebuie sa folosesc tot IRegisterResponse

export interface IRegisterPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IForgotPayload {
  email: string;
}
