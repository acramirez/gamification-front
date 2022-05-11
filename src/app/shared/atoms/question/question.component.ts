import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FAQ } from "../../interfaces/response/challengesContract.interface";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  @Input() question!:FAQ;
  showAnswer:boolean=false
  height!:number;
  @ViewChild('answer') answer!:ElementRef<HTMLElement>;



  show(){
    this.showAnswer=!this.showAnswer
  }
}
