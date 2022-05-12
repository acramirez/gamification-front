import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';



@NgModule({
  declarations: [ChallengeComponent],
  imports: [
    CommonModule
  ],
  exports:[ChallengeComponent]
})
export class ChallengeModule { }
