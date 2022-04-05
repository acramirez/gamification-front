import { Period } from "./iperiod-details";

export interface Card {
    current_limit:   CurrentLimit;
    display_number:  string;
    type:            string;
    status:          Status;
    potential_limit: CurrentLimit;
    lower_limit:     CurrentLimit;
    next_increase:   CurrentLimit;
    period:          Period;
}

export interface CurrentLimit {
    amount:        number;
    currency_code: string;
}

export enum Status {
    ACTIVE='ACTIVE',
    BLOCKED='BLOCKED'
}



