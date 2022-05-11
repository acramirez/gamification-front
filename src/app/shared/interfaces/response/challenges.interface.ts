import { CurrentLimit, Period } from "./gamification.interface";

export interface ChallengeLikeU{
    current_limit:CurrentLimit,
    cut_of_day?:Date| undefined,
    potential_limit:CurrentLimit,
    period:Period
}