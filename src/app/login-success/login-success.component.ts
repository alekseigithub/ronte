import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Login } from 'src/app/login';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent implements OnInit {
  constructor(private loginService: LoginService) { }
  
  code: string;
  phone: string;

  ngOnInit() {
  	this.code = this.loginService.getData().code;
  	this.phone = this.loginService.getData().phone;
  }

}
