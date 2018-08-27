
import { PhoneCountryCode } from 'src/app/phone-country-code';
 
export class PhoneCodeService {
 
    private data: PhoneCountryCode[] = [
        { country: "Russia", code: 7 },
        { country: "Germany", code: 49 },
        { country: "USA", code: 1 }
    ];

    getData(): PhoneCountryCode[] {
         
        return this.data;
    }

    addData(country: string, code: number) {
         
        this.data.push(new PhoneCountryCode(country, code));
    }
}