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
  deg:number=0
  @ViewChild('answer') answer!:ElementRef<HTMLElement>;



  show(){
    
    this.showAnswer=!this.showAnswer
    this.showAnswer?this.deg=90:this.deg=0
    console.log(this.deg);
  }
}
