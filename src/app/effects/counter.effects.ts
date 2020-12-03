import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as counterActions from '../actions/counter.action';
import { filter, map, tap } from 'rxjs/operators';
import { applicationStarted } from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  // logThemAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`Got an action of type ${a.type}`))
  //   ));

  // write to localstorage any time they change the count
  countBySet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );

  // when the application starts, see if there is a value in localStorage for what they want to count by.
  // if there isn't, not do anything.
  // if there is... dispatch a countBySet with that value
  loadCountBySet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted), // -> the application started. carry on.
      map(() => localStorage.getItem('by')),
      filter((val) => val !== null),
      map((val) => val === null ? '1' : val),
      map((val) => parseInt(val, 10)),
      map((by) => counterActions.countBySet({ by }))// => null | "1"| "3"|"5"
    ), { dispatch: true }
  );

  constructor(private actions$: Actions) { }
}
