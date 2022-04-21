
export interface Card {
    current_limit:   CurrentLimit;
    potential_limit: CurrentLimit;
}

export interface CurrentLimit {
    amount:        number;
    currency_code: string;
}

export enum Status {
    ACTIVE='ACTIVE',
    BLOCKED='BLOCKED'
}



