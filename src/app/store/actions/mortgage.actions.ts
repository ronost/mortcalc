import { Action } from '@ngrx/store';
import { Amount } from 'src/app/models/mortgage.model';
 
export enum ActionTypes {
    UPDATE_PRICE = '[Mortgage calculator] Update Price',
    UPDATE_DOWN_PAYMENT = '[Mortgage calculator] Update Downpayment'
}

export class UpdatePriceAction implements Action {
    readonly type = ActionTypes.UPDATE_PRICE;

    constructor(public payload: Amount) { }
}

export class UpdateDownPaymentAction implements Action {
    readonly type = ActionTypes.UPDATE_DOWN_PAYMENT;

    constructor(public payload: Amount) { }
}

export type Union = UpdatePriceAction | UpdateDownPaymentAction;
