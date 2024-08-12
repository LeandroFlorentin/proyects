export interface IgetDecodedToken {
  info: boolean;
  msg: "string";
  content: {
    idusername: number;
  };
}
export interface IgetUsernamesResponse {
  idusername: number;
  username: string;
  email: string;
  name: string;
  lastname: string;
  phone: string;
}
export interface IBodyGetUsernames {
  idusername: number;
}
export interface IQueryUsernames {
  idusername: string;
}

export interface ICustomHeaders {
  authorization: string;
}

export interface IxBodyGetUsernames {
  xidusername: number;
}
