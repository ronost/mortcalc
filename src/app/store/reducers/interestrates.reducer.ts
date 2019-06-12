import * as InterestRateActions from '../actions/interestrate.actions';
import { InterestRate } from 'src/app/models/interestrate.model';

export interface InterestRateState  {
    entities: {[key: number]: InterestRate},
    loaded: boolean
}

export const initialState: InterestRateState = {
    entities: {},
    loaded: false
};
 
export function interestRateReducer(state: InterestRateState = initialState, action: InterestRateActions.Union) {
    switch (action.type) {
        case InterestRateActions.ActionTypes.LOAD_INTEREST_RATES_SUCCESS:
            const interestRateEntities = action.payload.reduce((entities, interestRate) => {
                    return { ...entities, [interestRate.id]: interestRate };
                }, {
                    ...state.entities
                }
            );
            return {
                ...state,
                entities: interestRateEntities,
                loaded: true
            };
    
        case InterestRateActions.ActionTypes.LOAD_INTEREST_RATES_ERROR:
        default:
            // Not yet impl
            return {...state};
        }
}