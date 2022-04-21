import { CurrentLimit, Period } from "./gamification.interface";

export interface ChallengeLikeU{
    current_limit:CurrentLimit,
    potential_limit:CurrentLimit,
    period:Period
}