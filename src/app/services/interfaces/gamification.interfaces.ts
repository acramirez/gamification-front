export interface Gamifications {
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
    period_id:         string;
    initial_date:      Date;
    due_date:          Date;
    acumulated_limit:  CurrentLimit;
    payment_card:      PaymentCard[];
    recurring_payment: Assintance[];
    domiciliation:     Assintance[];
    assintance:        Assintance[];
    payroll:           Assintance[];
    status:            string;
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
