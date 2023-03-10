import { AuthServiceInterface } from "./AuthServiceInterface";

export class AuthServiceFacebook implements AuthServiceInterface{

    login(email: any, password: any): boolean{
        return true;
    }
}