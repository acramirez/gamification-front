import { Injectable } from '@angular/core';
import { challengesContract } from 'src/app/shared/data/constant/challengesContract';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor() { }

  get challenges(){
    return challengesContract
  }
}
