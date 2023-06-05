import { Component } from '@angular/core';
import { teamCards } from 'src/app/CardData';
import { Card } from 'src/app/card';

@Component({
  selector: 'who-are-we-section',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss'],
})
export class WhoAreWeComponent {
  cardsArray: Card[] = teamCards;
}
