export interface Gamification {
    data:          Data;
    notifications: Notification[];
}

export interface Data {
    hiring_date:          Date;
    contract_key:         string;
    activation_date:      Date;
    type:                 string;
    status:               string;
    last_evaluation_date: Date;
    cut_of_date:          Date;
    card:                 Card;
    seen_first_time:      boolean;
}

export interface Card {
    current_limit:   CurrentLimit;
    display_number:  string;
    type:            string;
    status:          string;
    potential_limit: CurrentLimit;
    lower_limit:     CurrentLimit;
    next_increase:   CurrentLimit;
    period:          Period;
}

export interface CurrentLimit {
    amount:        number;
    currency_code: string;
}

export interface Period {
    current_period: string;
    status:         string;
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
    digitalChannels:      any[];
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
