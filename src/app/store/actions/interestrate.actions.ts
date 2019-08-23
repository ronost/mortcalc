import { Action } from '@ngrx/store';
import { InterestRate } from 'src/app/models/interestrate.model';
 
export enum ActionTypes {
    LOAD_INTEREST_RATES = '[Interest rate] Load rates',
    LOAD_INTEREST_RATES_SUCCESS = '[Interest rate] Load rates success',
    LOAD_INTEREST_RATES_ERROR = '[Interest rate] Load rates errors'
}

export class LoadInterestRatesAction implements Action {
    readonly type = ActionTypes.LOAD_INTEREST_RATES;

    constructor() { }
}

export class LoadInterestRatesSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_INTEREST_RATES_SUCCESS;

    constructor(public payload: Array<InterestRate> ) { }
}

export class LoadInterestRatesErrorAction implements Action {
    readonly type = ActionTypes.LOAD_INTEREST_RATES_ERROR;

    constructor(public payload: any) { }
}

export type Union = LoadInterestRatesAction | LoadInterestRatesSuccessAction | LoadInterestRatesErrorAction;
