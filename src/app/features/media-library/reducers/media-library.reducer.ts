import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer } from "@ngrx/store";

export interface MediaItemEntity {
  id: string;
  title: string;
  format: string;
}

export interface MediaLibraryState extends EntityState<MediaItemEntity> {

}

export const adapter = createEntityAdapter<MediaItemEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState
)

export function reducer(state: MediaLibraryState = initialState, action: Action): MediaLibraryState {
  return reducerFunction(state, action);
}
