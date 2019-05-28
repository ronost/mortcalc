import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Simulate } from '../../store/actions/mortgage.actions';
import { Mortgage } from '../../models/mortgage.model'
import { ApplicationState } from 'src/app/store/app.state';
import { MortgageState } from 'src/app/store/reducers/mortgage/mortgage.reducer';


@Component({
  selector: 'mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})

export class MortgageCalculatorComponent {
    price: number;
    mortgage$: Observable<MortgageState>;

    constructor(private store: Store<ApplicationState>) {
        this.mortgage$ = store.pipe(select(state => state.mortgage));
    }
 
    calculate() {
        console.log("calculate()");
        this.store.dispatch(new Simulate(<Mortgage> { price: this.price } ));
    }
}
