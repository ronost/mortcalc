import { Action } from '@ngrx/store';
import { Mortgage } from 'src/app/models/mortgage.model';
 
export enum ActionTypes {
    Simulate = '[Mortgage calculator] Simulate',
    Reset = '[Mortgage calculate] Reset'
}

export class Simulate implements Action {
    readonly type = ActionTypes.Simulate;

    constructor(public payload: Mortgage) { }
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;

    constructor(public payload: Mortgage) { }
}

export type Union = Simulate | Reset;
