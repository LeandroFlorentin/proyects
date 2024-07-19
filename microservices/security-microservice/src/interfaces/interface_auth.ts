export interface CreateUser {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
  phone: string;
}
export interface CreateUserResponse {
  info: boolean;
  msg: string;
  idusername: number;
}

export interface ResponseCreateToken {
  info: boolean;
  msg: string;
  content: {
    token: string;
  };
}
