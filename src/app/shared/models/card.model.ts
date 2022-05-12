import { CurrentLimit } from "../interfaces/response/gamification.interface";


export class Card {

    constructor(
        public current_limit:CurrentLimit,
        public type:string,    
        public display_number:string,
        public potential_limit: CurrentLimit,
        public next_increase: CurrentLimit,
    ) {}

}