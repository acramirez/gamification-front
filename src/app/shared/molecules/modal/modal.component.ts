import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
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
export class ModalComponent implements AfterViewInit {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  @Input() modal!: Modal;
  @ViewChild('textModalContent') textModalContent!: ElementRef<HTMLSpanElement>;

  constructor(private callback: GamificationCallbacksService) {}

  ngAfterViewInit(): void {}

  redirect() {
    this.callback.redirect(this.modal.challenge.id);
  }

  public convertToStrong(
    message: string = '',
    strongs: string[] | boolean
  ): string {
    if (Array.isArray(strongs)) {
      strongs.forEach((word) => {

        message = message.replace(word, `<strong> ${word} </strong>`);
      });
    }
    return message;
  }
}
