import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent {
  @Input() description: string = '';
  @Input() title: string = '';
  @Input() speciality: string = '';
}
