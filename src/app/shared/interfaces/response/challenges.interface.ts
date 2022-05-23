import { CurrentLimit, Period } from "./gamification.interface";

export interface ChallengeLikeU{
    current_limit:CurrentLimit,
    cut_of_date?:Date| undefined,
    potential_limit:CurrentLimit,
    period:Period,
    status:string;
}