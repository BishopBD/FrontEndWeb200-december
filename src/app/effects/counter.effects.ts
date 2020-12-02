import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as counterActions from '../actions/counter.action';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  // write to localstorage any time they change the count
  countBySet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );


  constructor(private actions$: Actions) { }
}
