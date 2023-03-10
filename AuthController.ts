import { AuthServiceFacebook } from "./AuthServiceFacebook";
import { AuthServiceInterface } from "./AuthServiceInterface";

class AuthController{

    private authService: AuthServiceInterface

    constructor(authService:AuthServiceInterface){
        this.authService = authService;
    }

    login(email:any, password:any){

        if(this.authService.login(email, password)){
            console.log('logado...')
        }else{
            console.log('Não logado...')
        }
    }
}

const authService = new AuthServiceFacebook;

const auth = new AuthController(authService);
auth.login("pauloggjoao@gmail.com", "123");


