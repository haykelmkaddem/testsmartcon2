import { Component } from '@angular/core';
import { projectCards } from 'src/app/CardData';
import { Card } from 'src/app/card';

@Component({
  selector: 'case-studies-section',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss'],
})
export class CaseStudiesComponent {
  cardsArray: Card[] = projectCards;
}
