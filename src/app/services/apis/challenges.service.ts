import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  challengesContract} from "../../../assets/data/constant/challengesContract";



@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor(
    private http:HttpClient
  ){}

  get challenges(){
    return challengesContract
  }


  getChallenges(){
    this.http.get('../../../assets/data/ChallengesContract.json')
  }
}
