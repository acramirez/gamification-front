import { CurrentLimit } from "../services/interfaces/gamification.interfaces";

export class Card {

    constructor(
        public current_limit:CurrentLimit,
        public type:string,    
        public display_number:string,
        private potential_limit: CurrentLimit,
        private next_increase: CurrentLimit,
    ) {}

}