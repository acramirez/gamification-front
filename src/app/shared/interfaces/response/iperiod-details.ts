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
    period_id:             string;
    initial_date:          Date;
    due_date:              Date;
    accumulated_purchases: CurrentLimit;
    card_payment:          CardPayment[];
    recurrent_payment:     RecurrentPayment[];
    domiciliation:         any[];
    assistance:            any[];
    payroll_portability:   any[];
    status:                string;
}

export interface CardPayment {
    amount_payment: CurrentLimit;
    minimum_amount: CurrentLimit;
    operation_date: Date;
}

export interface RecurrentPayment {
    id:             string;
    status:         string;
    operation_date: Date;
}

export interface Notification {
    code:      string;
    level:     string;
    message:   string;
    timestamp: string;
}

