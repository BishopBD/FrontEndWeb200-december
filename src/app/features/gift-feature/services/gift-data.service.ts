import { BehaviorSubject, Observable, of } from 'rxjs';
import { GiftCreate, GiftItem } from '../models';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GiftIdeaEntity } from '../reducers/gift-ideas.reducer';

@Injectable()
export class GiftDataService {

  constructor(private client: HttpClient) { }

  readonly baseUrl = environment.giftApiUrl;

  private data: GiftItem[] = [
    // { for: 'Henry', holiday: 'Christmas', suggestions: 'XBox Games' },
    // { for: 'Violet', holiday: 'Christmas', suggestions: 'Wigs and Makup' }
  ];

  private subject = new BehaviorSubject<GiftItem[]>(this.data);
  getCountOfGiftsToBuy(): Observable<number> {
    return of(13);
  }

  // getCountOfGiftsToBuy(): Observable<number> {
  //   return this.subject
  //     .pipe(
  //       map(items => items.length) // GiftItem[] into number
  //     );
  // }

  // a way to get the data.
  getGiftData(): Observable<GiftIdeaEntity[]> {
    // call the API and get the data...
    return this.client.get<{ data: GiftIdeaEntity[] }>(this.baseUrl + 'gifts')
      .pipe(
        map(response => response.data)
      );
  }
  // a way to add an item
  addItem(giftItem: GiftCreate): Observable<GiftIdeaEntity> {
    return this.client.post<GiftIdeaEntity>(this.baseUrl + 'gifts', giftItem);
  }
  // a way to get a summary (how many gifts do we have to buy yet?)
}
