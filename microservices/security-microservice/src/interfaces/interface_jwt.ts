import { JwtPayload } from "jsonwebtoken";
export interface IResponseDecoded extends JwtPayload {
  idusername: string;
  iat: number;
}
