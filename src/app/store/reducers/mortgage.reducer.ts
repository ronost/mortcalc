import * as MortgageActions from '../actions/mortgage.actions';
import { Mortgage, Amount } from 'src/app/models/mortgage.model';

export interface MortgageState  {
  mortgage: Mortgage;
}

export const initialState: MortgageState = {
    mortgage: <Mortgage> {
        price: <Amount> {
            value: 0, 
            currency: "SEK"
        },
        downPayment: <Amount> {
            value: 0, 
            currency: "SEK"
        },
        operatingCosts: <Amount> {
            value: 0, 
            currency: "SEK"
        },
        interestRate: "0.0"
    }
};
 
export function mortgageReducer(state: MortgageState = initialState, action: MortgageActions.Union) {
    switch (action.type) {
        case MortgageActions.ActionTypes.UPDATE_PRICE:
            return {
                ...state,
                mortgage: {
                    ...state.mortgage,
                    price: action.payload
                }
            }; 
        case MortgageActions.ActionTypes.UPDATE_DOWN_PAYMENT:
            return {
                ...state,
                mortgage: {
                    ...state.mortgage,
                    downPayment: action.payload
                }
            };
        default:
            return {
                ...state
            };
    }
}