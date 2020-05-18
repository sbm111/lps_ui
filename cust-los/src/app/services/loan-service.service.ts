import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CustomerLoan } from '../customer-loan';

@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {

  /**
   * Service URI for create loan.
   */
  _url = '/loan/borrower/createloan';

  constructor(private _http: HttpClient) { }

  /**
   * This method call create loan service.
   * @param customerLoan 
   */
  createLoan(customerLoan:CustomerLoan){
    console.log("Service Object : "+customerLoan);
    return this._http.post<any>(this._url,customerLoan);
  }
}
