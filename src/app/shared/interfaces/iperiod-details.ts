import { CurrentLimit } from "./icard-details";

export enum StatusPeriodInfo{
    ACTIVE =   "ACTIVE", 
    DISABLE  =   "DISABLE"
}

export enum StatusPeriodDetails{
    ONGOING =   "ONGOING", 
    FINISH  =   "FINISH"
}

export interface Period {
    current_period: string;
    status:         StatusPeriodInfo;
    period_detail:  PeriodDetail[];
}

export interface PeriodDetail {
    period_id:         string;
    initial_date:      Date;
    due_date:          Date;
    acumulated_limit:  CurrentLimit;
    payment_card:      PaymentCard[];
    recurring_payment: Assintance[];
    domiciliation:     Assintance[];
    assintance:        Assintance[];
    payroll:           Assintance[];
    status:            StatusPeriodDetails;
}

export interface Assintance {
    status:         string;
    operation_date: Date;
}

export interface PaymentCard {
    amount_payment: CurrentLimit;
    minimum_amount: CurrentLimit;
    operation_date: Date;
}
