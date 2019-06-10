import { ApplicationState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { Amount } from 'src/app/models/mortgage.model';

export const selectMortgagePrice = (state: ApplicationState) => state.mortgage.mortgage.price;
export const selectDownPayment = (state: ApplicationState) => state.mortgage.mortgage.downPayment;
 
export const selectMortagePriceValue = createSelector(
    selectMortgagePrice,
    (selectMortgagePrice: Amount) => selectMortgagePrice.value
);

export const selectDownPaymentValue = createSelector(
    selectDownPayment,
    (selectDownPayment: Amount) => selectDownPayment.value
);