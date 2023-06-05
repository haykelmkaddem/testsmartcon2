import { Component } from '@angular/core';
import { commentCards } from 'src/app/CardData';
import { Card } from 'src/app/card';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  cardsArray: Card[] = commentCards;
}
