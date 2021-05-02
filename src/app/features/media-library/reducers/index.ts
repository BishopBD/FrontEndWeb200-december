import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { MediaItem } from '../models';
import * as fromMediaLibrary from './media-library.reducer';
export const featureName = 'mediaLibraryFeature';
export interface MediaLibraryFeatureState {
  mediaItems: fromMediaLibrary.MediaLibraryState;
}

export const reducers: ActionReducerMap<MediaLibraryFeatureState> = {
  mediaItems: fromMediaLibrary.reducer
};



// 1. Feature
const selectMediaLibraryFeature = createFeatureSelector<MediaLibraryFeatureState>(featureName);

// 2.
const selectMediaItemBranch = createSelector(
  selectMediaLibraryFeature,
  f => f.mediaItems
);




const { selectAll: selectAllMediaItemsArray } = fromMediaLibrary
  .adapter
  .getSelectors(
    selectMediaItemBranch);

export const selectMediaItems = createSelector(
  selectAllMediaItemsArray,
  (items) => items.map(item => {
    return {
      ...item,
      isTemp: item.id.toString().startsWith('T')
    };
  })
);
