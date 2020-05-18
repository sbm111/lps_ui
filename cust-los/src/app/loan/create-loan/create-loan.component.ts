import { Component, OnInit } from '@angular/core';
import { CustomerLoan } from 'src/app/customer-loan';
import { LoanServiceService } from 'src/app/services/loan-service.service';


@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.scss']
})
export class CreateLoanComponent implements OnInit {

  //Sucees message and indicatior variables
  sucessMessage:string;
  sucess:boolean = false;

  //Error message and indicator variables
  errorMessage:string;
  error:boolean = false;

  constructor(private loanService:LoanServiceService) { }

  customerLoanModel = new CustomerLoan();

  ngOnInit(): void {
    this.sucess = false;
    this.error = false;
  }

  /**
   * This method submit form data and call loan service.
   */
  onLoanSubmit(){
    console.log(this.customerLoanModel);
    this.loanService.createLoan(this.customerLoanModel).subscribe(
      data => {
        console.log("sucess",data);        
        this.sucessMessage = data.success;
        this.sucess = true;
      },
      error => {
        console.error("error",error);
        this.errorMessage = error.error; 
      }
    )
  }

}
