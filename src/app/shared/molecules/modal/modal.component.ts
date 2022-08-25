import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { GamificationCallbacksService } from '../../../services/gamification-callbacks.service';
import { Modal } from '../../interfaces/atoms/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  @Input() modal!: Modal;
  @ViewChild('textModalContent') textModalContent!: ElementRef<HTMLSpanElement>;

  constructor(private callback: GamificationCallbacksService) {}

  redirect() {
    this.callback.redirect(this.modal.challenge.id);
  }

  public convertToStrong(
    strongs: string[] | boolean,
    message = '',
  ): string {
    if (Array.isArray(strongs)) {
      strongs.forEach((word) => {

        message = message.replace(word, `<strong> ${word} </strong>`);
      });
    }
    return message;
  }
}
