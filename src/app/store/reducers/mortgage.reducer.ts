import * as MortgageActions from '../actions/mortgage.actions';
import { Mortgage } from 'src/app/models/mortgage.model';

export interface MortgageState  {
  mortgage: Mortgage;
}

export const initialState: MortgageState = {
  mortgage: <Mortgage> {
    price: 0,
    downPayment: 0,
    interestRate: "0.0"
  }
};
 
export function mortgageReducer(state: MortgageState = initialState, action: MortgageActions.Union) {
  switch (action.type) {
    case MortgageActions.ActionTypes.SIMULATE:
      return {...state,
        mortgage: action.payload
      };
 
    case MortgageActions.ActionTypes.RESET:
    default:
      return {...state};
    }
}