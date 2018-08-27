import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ButtonComponent } from './button/button.component';
import { LoginComponent } from './login/login.component';
import { LoginSuccessComponent } from './login-success/login-success.component';

import { LoginService } from 'src/app/login.service';
import { Login } from 'src/app/login';

import { TextMaskModule } from 'angular2-text-mask';
import { InteractiveArrowComponent } from './interactive-arrow/interactive-arrow.component';

import { Utilities } from './utilities.service';

// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login-success', component: LoginSuccessComponent}
];
 

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    LoginFormComponent,
    LoginComponent,
    LoginSuccessComponent,
    InteractiveArrowComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextMaskModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, Utilities],
  bootstrap: [AppComponent]
})
export class AppModule { }
