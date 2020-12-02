import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};


// 1. Create a feature selector (if you are in a feature, we aren't but we will later)
// 2. Create a selector for each "branch" of your state (each property of the state off the root of the object)
const selectCounterBranch = (state: AppState) => state.counter;
// 3. Create any "helpers" you might need (optional)
// 4. Create the selectors that your components need.
// 4.a. We need one that returns the dang count.

export const selectCounterCount = createSelector(
  selectCounterBranch,
  b => b.count
);

export const selectResetDisabled = createSelector(
  selectCounterCount,
  c => c === 0
);

export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
);

