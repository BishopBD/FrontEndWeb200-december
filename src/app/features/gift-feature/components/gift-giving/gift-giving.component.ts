import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftItem } from '../../models';
import { GiftDataService } from '../../services/gift-data.service';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.scss']
})
export class GiftGivingComponent implements OnInit {

  data$!: Observable<GiftItem[]>;
  constructor(private service: GiftDataService) { }

  ngOnInit(): void {
    this.data$ = this.service.getGiftData();
  }

  onItemAdded(item: GiftItem): void {
    this.service.addItem(item);
  }

}
