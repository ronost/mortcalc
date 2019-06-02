import { ActionReducerMap } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import { mortgageReducer, MortgageState } from './reducers/mortgage.reducer';
import { interestRateReducer, InterestRateState } from './reducers/interestrates.reducer';

export interface ApplicationState {
    readonly mortgage: MortgageState;
    readonly interestRates: InterestRateState;
}

export const ROOT_REDUCER: ActionReducerMap<ApplicationState> = { 
    mortgage: mortgageReducer,
    interestRates: interestRateReducer
};
export const META_REDUCERS = !environment.production ? [storeFreeze] : [];