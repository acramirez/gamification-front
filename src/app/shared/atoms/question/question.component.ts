import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FAQ } from "../../interfaces/response/challengesContract.interface";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

/**
   * question data
   */
 @Input() question!:FAQ;
 /**
  * property to show the answer
  */
 showAnswer=false
 /**
  * property to rotate chevron question
  */
 deg=0
 /**
  * ViewChild answerx
  */
 @ViewChild('answer') answer!:ElementRef<HTMLElement>;

 /**
  * Function to show answer
  */
 show(){
   this.showAnswer=!this.showAnswer
   this. deg=this.showAnswer?90:0
 }
}
