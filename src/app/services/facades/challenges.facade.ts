import { Injectable } from "@angular/core";
import { ChallengesService } from "../apis/challenges.service";


@Injectable({
    providedIn: 'root'
})
export class ChallengesFacade{

    constructor(private challengesService:ChallengesService){
    }

    /**
     * Function facade challenges contract
     * @returns observable Challenge Contract
     */
    getChallenges(){
        return this.challengesService.challenges;
    }

}
