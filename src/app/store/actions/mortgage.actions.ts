import { Action } from '@ngrx/store';
import { Mortgage } from 'src/app/models/mortgage.model';
 
export enum ActionTypes {
    SIMULATE = '[Mortgage calculator] Simulate',
    RESET = '[Mortgage calculate] Reset'
}

export class SimulateAction implements Action {
    readonly type = ActionTypes.SIMULATE;

    constructor(public payload: Mortgage) { }
}

export class ResetAction implements Action {
    readonly type = ActionTypes.RESET;

    constructor(public payload: Mortgage) { }
}

export type Union = SimulateAction | ResetAction;
