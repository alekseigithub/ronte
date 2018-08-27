import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Login } from 'src/app/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})

export class AppComponent {
	constructor(
		private loginService: LoginService,
	){}
	
  title = 'my-project';
}
