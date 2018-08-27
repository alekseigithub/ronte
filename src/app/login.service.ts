
import { Login } from 'src/app/login';
 
export class LoginService {
 
    private data: Login = {
        country: '',
        code: '',
        phone: ''
    };

    getData() {
         
        return this.data;
    }

    addData(country: string, code: string, phone: string) {
         
        this.data = new Login(country, code, phone);
    }
}