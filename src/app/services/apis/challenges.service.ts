import { Injectable } from '@angular/core';
import {  challengesContract} from "../../../assets/data/constant/challengesContract";



@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  /**
   * get challenges from const challengesContract
   */
  get challenges(){
    return challengesContract
  }
}
