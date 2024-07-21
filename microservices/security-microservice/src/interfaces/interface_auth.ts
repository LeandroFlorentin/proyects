export interface ICreateUser {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
  phone: string;
}

export interface ICreateUserX {
  xusername: string;
  xemail: string;
  xpassword: string;
  xname: string;
  xlastname: string;
  xphone: string;
}
export interface ICreateUserResponse {
  idusername: number;
  email: string;
  name: string;
  lastname: string;
  phone: string;
  password: string;
}

export interface IResponseCreateToken {
  info: boolean;
  msg: string;
  content: {
    token: string;
  };
}

export interface IBodyLogin {
  username: string;
  password: string;
}

export interface IBodyLoginX {
  xusername: string;
  xpassword: string;
}

export interface IResponseFindUser {
  idusername: number;
}
