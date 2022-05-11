import { Injectable } from "@angular/core";
import { ChallengesService } from "../apis/challenges.service";


@Injectable({
    providedIn: 'root'
})
export class ChallengesFacade{

    constructor(private challengesService:ChallengesService){
    }

    getChallenges(){
        return this.challengesService.challenges;
    }

}