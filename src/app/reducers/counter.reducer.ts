import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.action';

export interface CounterState {
  count: number;
  by: number;
}

export const initialState: CounterState = {
  count: 0,
  by: 1
};

const reducerFunction = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (state) => ({ ...state, count: state.count + state.by })),
  on(actions.countDecremented, (state) => ({ ...state, count: state.count - state.by })),
  on(actions.countBySet, (state, action) => ({ ...state, by: action.by }))
);
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return reducerFunction(state, action);
}

