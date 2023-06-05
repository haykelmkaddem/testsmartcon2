import { Component } from '@angular/core';
import { Card } from '../../../card';
import { whatWeDoCards } from 'src/app/CardData';

@Component({
  selector: 'what-we-do-section',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
})
export class WhatWeDoComponent {
  cardsArray: Card[] = whatWeDoCards;
}
