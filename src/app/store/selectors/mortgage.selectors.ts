import { ApplicationState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { Amount, Mortgage } from 'src/app/models/mortgage.model';

export const selectMortgageState = (state: ApplicationState) => state.mortgage.mortgage;
export const selectMortgagePrice = (state: ApplicationState) => state.mortgage.mortgage.price;
export const selectDownPayment = (state: ApplicationState) => state.mortgage.mortgage.downPayment;
export const selectOperatingcost = (state: ApplicationState) => state.mortgage.mortgage.operatingCosts;
 
export const selectMortagePriceValue = createSelector(
    selectMortgagePrice,
    (selectMortgagePrice: Amount) => selectMortgagePrice.value
);

export const selectDownPaymentValue = createSelector(
    selectDownPayment,
    (selectDownPayment: Amount) => selectDownPayment.value
);

export const selectOperatingCostValue = createSelector(
    selectOperatingcost,
    (selectOperatingcost: Amount) => selectOperatingcost.value
);

export const calculateLoanAmountValue = createSelector(
    selectMortgageState,
    (selectMortgageState: Mortgage) => selectMortgageState.price.value - selectMortgageState.downPayment.value
);
