import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdatePriceAction, UpdateDownPaymentAction, UpdateOperatingCostAction } from '../../store/actions/mortgage.actions';
import { Amount } from '../../models/mortgage.model'
import { ApplicationState } from 'src/app/store/app.state';

import { LoadInterestRatesAction } from 'src/app/store/actions/interestrate.actions';
import { InterestRateState } from 'src/app/store/reducers/interestrates.reducer';
import { selectDownPaymentValue, selectMortagePriceValue, selectOperatingCostValue, calculateLoanAmountValue } from 'src/app/store/selectors/mortgage.selectors';

@Component({
  selector: 'mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})

export class MortgageCalculatorComponent {
    calculationOpen: boolean = true;
    price: number;
    downPayment: number;
    operatingcosts: number;
    interestRateId: number = 0;
    mortgagePriceValue$: Observable<number>;
    downPaymentValue$: Observable<number>;
    operatingcostsValue$: Observable<number>;
    interestRates$: Observable<InterestRateState>;
    loanAmountValue$: Observable<Number>;

    constructor(private store: Store<ApplicationState>) {
        this.mortgagePriceValue$ = this.store.pipe(select(selectMortagePriceValue));
        this.downPaymentValue$ = this.store.pipe(select(selectDownPaymentValue));
        this.operatingcostsValue$ = this.store.pipe(select(selectOperatingCostValue));
        this.interestRates$ = this.store.pipe(select(state => state.interestRates));
        this.loanAmountValue$ = this.store.pipe(select(calculateLoanAmountValue));
    }

    ngOnInit() {
        this.store.dispatch(new LoadInterestRatesAction());
    }
 
    calculate() {
        this.calculationOpen = false;
        this.store.dispatch(new UpdatePriceAction(<Amount> { value: this.price, currency: "SEK" } ));
        this.store.dispatch(new UpdateDownPaymentAction(<Amount> { value: this.downPayment, currency: "SEK" } ));
        this.store.dispatch(new UpdateOperatingCostAction(<Amount> { value: this.operatingcosts, currency: "SEK" } ));
    }

    updatePrice(event) {
        this.price = event;
        this.store.dispatch(new UpdatePriceAction(<Amount> { value: this.price, currency: "SEK" } ));
    }

    updateDownPayment(event) {
        this.downPayment = event;
        this.store.dispatch(new UpdateDownPaymentAction(<Amount> { value: this.downPayment, currency: "SEK" } ));
    }

    setCalculationOpen() {
      this.calculationOpen = true;
    }
}
