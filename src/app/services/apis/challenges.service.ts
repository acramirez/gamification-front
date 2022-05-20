import { Injectable } from '@angular/core';
import { challengesContract } from 'src/assets/data/constant/challengesContract';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  get challenges(){
    return challengesContract
  }
}
