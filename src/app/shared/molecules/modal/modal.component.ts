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
  selector: 'lu-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  @Input() modal!: Modal;
  @ViewChild('textModalContent') textModalContent!: ElementRef<HTMLSpanElement>;

  constructor(private callback: GamificationCallbacksService) {}

  /**
   * Callback redirect
   */
  redirect() {
    this.callback.redirect(this.modal.challenge.id);
  }

  /**
   * Replace strong words in message
   * @param strongs Words to transform strong
   * @param message message to find strong words
   * @returns new message
   */
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
