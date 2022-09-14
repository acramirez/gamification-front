import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Tab } from '../interfaces/atoms/tab.interface';

@Directive({
  selector: '[lu-tabs]',
})
export class TabDirective implements OnInit, AfterViewInit, OnDestroy {
  /**
   * Subscription for fromEvent(click)
   */
  sub$!: Subscription;
  /**
   * tab data
   */
  @Input() tabData!: Tab[];

  /**
   * initial tab assign style
   */
  @Input() initialTab!: number;

  /**
   * assign tab active style
   */
  @Input() active!: boolean;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  /**
   * Input set
   */
  @Input() set tabsDirective(type: string) {
    // if (type === 'tab') {
    //   this.elementTab();
    // }
  }

  /**
   * OnInit life cycle: Component loading view start.
   * Validate status ongoing to assign class active--tab
   * @returns void
   */
  ngOnInit(): void {
    // for (let i = 0; i < elements.length; i++) {
    //   const element = elements[i];
    //   if (this.tabData[i].status==='ONGOING') {
    //     element.children[0].classList.add('active--tab');
    //     break;
    //   }
    //   console.log();
    // }
    // if (this.tabData && this.tabData.status === 'ONGOING') {
    //   this.elementRef.nativeElement.children[0].classList.add('active--tab');
    // }else if (this.tabData && this.tabData.status !== 'ONGOING' && ) {
    // }
  }

  ngAfterViewInit(): void {
    const elements = this.elementRef.nativeElement.children;

    elements[this.initialTab].children[0].classList.add('active--tab');

    this.sub$ = fromEvent(document, 'click').subscribe((event) => {
      this.isActive(event.target as HTMLElement);
    });
  }

  /**
   * Function Detect the click event
   */
  // elementTab() {
  //   this.sub$ = fromEvent(document, 'click').subscribe((event) => {
  //     this.isActive(event.target as HTMLElement);
  //   });
  // }

  /**
   * Function to add or remove class active--tab
   * @param elementCheck element clicked
   */

  isActive(elementCheck: HTMLElement) {
    const elements = this.elementRef.nativeElement.children;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (elementCheck === element || element.contains(elementCheck)) {
        element.children[0].classList.add('active--tab');
      } else if (
        elementCheck.classList.contains('tab') ||
        elementCheck.classList.contains('tab__text') ||
        elementCheck.classList.contains('tab__icon')
      ) {
        element.children[0].classList.remove('active--tab');
      }
    }
  }
  /**
   * OnDestroy life cycle:
   * Unsubscribe fromEvent
   * @returns void
   */
  ngOnDestroy(): void {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }
}
