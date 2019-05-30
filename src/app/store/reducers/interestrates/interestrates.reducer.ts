import * as InterestRateActions from '../../actions/interestrate/interestrate.actions';
import { InterestRate } from 'src/app/models/interestrate.model';

export interface InterestRateState  {
  interestrates: Array<InterestRate>;
}

export const initialState: InterestRateState = {
    interestrates: []
};
 
export function interestRateReducer(state: InterestRateState = initialState, action: InterestRateActions.Union) {
    switch (action.type) {
        case InterestRateActions.ActionTypes.LOAD_INTEREST_RATES_SUCCESS:
            console.log("inside reducer SUCCESS");
            console.log("action.payload: ", action.payload);
            return {...state,
                interestrates: action.payload,
                loaded: true
            };
    
        case InterestRateActions.ActionTypes.LOAD_INTEREST_RATES_ERROR:
        default:
            // Not yet impl
            return {...state};
        }
}