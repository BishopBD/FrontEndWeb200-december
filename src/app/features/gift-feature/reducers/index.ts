import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { GiftItem } from '../models';
import * as fromGiftIdeas from './gift-ideas.reducer';
export const featureName = 'giftsFeature';
export interface GiftFeatureState {
  giftIdeas: fromGiftIdeas.GiftIdeaState;
}

export const reducers: ActionReducerMap<GiftFeatureState> = {
  giftIdeas: fromGiftIdeas.reducer
};



// 1. Feature
const selectGiftFeature = createFeatureSelector<GiftFeatureState>(featureName);

// 2.
const selectGiftIdeaBranch = createSelector(
  selectGiftFeature,
  f => f.giftIdeas
);




const { selectAll: selectAllGiftArray } = fromGiftIdeas.adapter.getSelectors(selectGiftIdeaBranch);

export const selectGiftItems = createSelector(
  selectAllGiftArray,
  (items) => items.map(item => {
    return {
      ...item,
      isTemp: item.id.toString().startsWith('T')
    };
  })
);
