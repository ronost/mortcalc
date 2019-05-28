import { ActionReducerMap } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import { mortgageReducer, MortgageState } from './reducers/mortgage/mortgage.reducer';

export interface ApplicationState {
    readonly mortgage: MortgageState;
}

export const ROOT_REDUCER: ActionReducerMap<ApplicationState> = { mortgage: mortgageReducer };
export const META_REDUCERS = !environment.production ? [storeFreeze] : [];