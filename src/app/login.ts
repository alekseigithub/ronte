
export class Login {
	country: string;
	code: string;
	phone: string;

    constructor(country, code, phone) {
    	this.country = country;
    	this.code = code;
    	this.phone = phone;
    }
}