import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FAQ } from "../../interfaces/response/challengesContract.interface";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question!:FAQ;

  showAnswer:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.showAnswer=!this.showAnswer
  }
}
