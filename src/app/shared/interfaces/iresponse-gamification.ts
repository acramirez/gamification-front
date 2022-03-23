import { Card } from "./icard-details";

export interface Gamification {
    data: Data;
}

export interface Data {
    customer_key:         string;
    hiring_date:          Date;
    contract_key:         string;
    activation_date:      Date;
    type:                 string;
    status:               string;
    last_evaluation_date: Date;
    cut_of_date:          Date;
    card:                 Card;
}