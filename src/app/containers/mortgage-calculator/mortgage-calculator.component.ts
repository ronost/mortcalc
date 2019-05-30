import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SimulateAction } from '../../store/actions/mortgage/mortgage.actions';
import { Mortgage } from '../../models/mortgage.model'
import { ApplicationState } from 'src/app/store/app.state';
import { MortgageState } from 'src/app/store/reducers/mortgage/mortgage.reducer';

import { LoadInterestRatesAction } from 'src/app/store/actions/interestrate/interestrate.actions';
import { InterestRateState } from 'src/app/store/reducers/interestrates/interestrates.reducer';

@Component({
  selector: 'mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})

export class MortgageCalculatorComponent {
    price: number;
    mortgage$: Observable<MortgageState>;
    interestRates$: Observable<InterestRateState>;

    constructor(private store: Store<ApplicationState>) {
        this.mortgage$ = store.pipe(select(state => state.mortgage));
        this.interestRates$ = store.pipe(select(state => state.interestRates));
    }

    ngOnInit() {
        this.store.dispatch(new LoadInterestRatesAction());
    }
 
    calculate() {
        this.store.dispatch(new SimulateAction(<Mortgage> { price: this.price } ));
    }
}
