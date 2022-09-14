import { Component, Input } from '@angular/core';
import { FAQ } from '../../interfaces/response/challengesContract.interface';

@Component({
  selector: 'app-frequently-questions',
  templateUrl: './frequently-questions.component.html',
  styleUrls: ['./frequently-questions.component.css'],
})
export class FrequentlyQuestionsComponent {
  /**
   * property array frequently questions
   */
  @Input() questions: FAQ[] = [];
}
