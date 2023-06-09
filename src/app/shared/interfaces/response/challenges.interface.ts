import { CurrentLimit, Period } from "./gamification.interface";

export interface ChallengeLikeU{
    current_limit:CurrentLimit,
    cut_of_date:Date
    potential_limit:CurrentLimit,
    lower_limit:CurrentLimit,
    period:Period,
    status:string;
    seen_first_time:boolean;
    statusChallenge:string
}
