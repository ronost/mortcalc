import { initialState, mortgageReducer } from "./mortgage.reducer";
import * as MortgageActions from '../actions/mortgage.actions';
import { Amount } from '../../models/mortgage.model'

describe('mortgage reducer', () => {
    it('should return initial state when no change', () => {
        const initState = initialState;
        const noopAction = 'noop' as unknown as MortgageActions.Union;
        const newState = mortgageReducer(undefined, noopAction);

        expect(newState).toEqual(initState);
      });

    it('should update mortgage price ', () => {
        const initState = initialState;
        const newAmount = <Amount> {
            value: 100,
            currency: "SEK"
        }
        const action = new MortgageActions.UpdatePriceAction(newAmount);
        const newState = mortgageReducer(initState, action);

        expect(initState).not.toEqual(newState);
        expect(newState.mortgage.price.value).toEqual(newAmount.value);
    });
  });