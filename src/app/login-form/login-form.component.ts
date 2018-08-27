import { Component, OnInit } from '@angular/core';
import { PhoneCodeService } from 'src/app/phone-code.service';
import { PhoneCountryCode } from 'src/app/phone-country-code';
import { LoginService } from 'src/app/login.service';
import { Login } from 'src/app/login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [PhoneCodeService]
})
export class LoginFormComponent implements OnInit {
  constructor(
  	private phoneCodeService: PhoneCodeService,
  	private loginService: LoginService,
  	private router: Router
  ){}

  countriesData: PhoneCountryCode[] = [];
  countriesList;

  selectedCountry: string = 'germany';
  countryName: string;
  countryCode: string;
  loginPhone: string = '';
  countriesListHTML = [];

  selectValue: string;

  selectId: string = 'country-select';

  telId: string = 'tel-input';

  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  onSubmit(form: NgForm){
    this.addLoginData(this.countryName, this.countryCode, this.loginPhone);
    this.success();
  }

  onIndexChange(selectedIndex) {
  	this.countryCode = '+' + this.countriesData[selectedIndex].code;
  }

  addLoginData(country: string, code: string, phone: string){
    this.loginService.addData(country, code, phone);
  }

  getSelectedIndex(countriesList, countryName) {
  	for (var i = 0; i < countriesList.length; i++) {
  		if (countryName.toLowerCase() === countriesList[i].toLowerCase()) {
  			return i;
  		}
  	}
  }

  success() {
       
      this.router.navigate(['login-success']);
  }

  ngOnInit() {
  	this.countriesData = this.phoneCodeService.getData();

  	this.countriesList = this.countriesData.map((obj) => {
  		this.countriesListHTML.push(
        `<i class="rounded-50 align-middle icon icon-${obj.country.substr(0, 2).toLowerCase()}"></i>
        <span class="align-middle">${obj.country}</span>`
      );
      return obj.country;
  	});

  	let selectedIndex = this.getSelectedIndex(this.countriesList, this.selectedCountry);

  	// this.countryName = this.countriesData[selectedIndex].country;
  	this.countryCode = '+' + this.countriesData[selectedIndex].code;

    this.selectValue = this.countriesListHTML[selectedIndex];
  }

}
