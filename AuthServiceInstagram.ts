import { AuthServiceInterface } from "./AuthServiceInterface";

class AuthServiceInstagram implements AuthServiceInterface{

    login(email: any, password: any): boolean{
        return false;
    }

}