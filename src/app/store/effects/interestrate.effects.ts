import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RestApiService } from 'src/app/services/restapi.service';
import * as InterestRateActions from '../actions/interestrate.actions';
 
@Injectable()
export class InterestRatesEffects {

    @Effect()
    loadInterestRates$ = this.actions$
        .pipe(
            ofType(InterestRateActions.ActionTypes.LOAD_INTEREST_RATES),
            mergeMap(() => this.restApi.getInterestRates()
            .pipe(
                map(interestRates => ({ type: InterestRateActions.ActionTypes.LOAD_INTEREST_RATES_SUCCESS, payload: interestRates.items })),
                catchError(() => EMPTY)
            ))
        );

    constructor(
        private actions$: Actions,
        private restApi: RestApiService
    ) { }
}