import { Component, OnInit } from '@angular/core';
import { GiftItem } from 'src/app/models';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent implements OnInit {

  items: GiftItem[] = [
    { for: 'Amy', holiday: 'Christmas', suggestions: 'Books and Movies' },
    { for: 'Sean', holiday: 'Kwanzaa', suggestions: 'Meat Things' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
