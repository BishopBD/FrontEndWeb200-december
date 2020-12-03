import { BehaviorSubject, Observable } from 'rxjs';
import { GiftItem } from '../models';
import { map } from 'rxjs/operators';


export class GiftDataService {


  private data: GiftItem[] = [
    { for: 'Henry', holiday: 'Christmas', suggestions: 'XBox Games' },
    { for: 'Violet', holiday: 'Christmas', suggestions: 'Wigs and Makup' }
  ];

  private subject = new BehaviorSubject<GiftItem[]>(this.data);

  getCountOfGiftsToBuy(): Observable<number> {
    return this.subject
      .pipe(
        map(items => items.length) // GiftItem[] into number
      );
  }

  // a way to get the data.
  getGiftData(): Observable<GiftItem[]> {
    // call the API and get the data...
    return this.subject.asObservable();
  }
  // a way to add an item
  addItem(giftItem: GiftItem): void {
    // in a real app, call the API, add it.. wait for it to come back and then...
    this.data = [giftItem, ...this.data];
    this.subject.next(this.data); // Hey all you subscribers! The new version of the data is available!
  }
  // a way to get a summary (how many gifts do we have to buy yet?)
}
