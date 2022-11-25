export interface Gamification {
  hiring_date: Date;
  contract_key: string;
  activation_date: Date;
  type: string;
  status: string;
  last_evaluation_date: null;
  cut_of_date: Date;
  card: Card;
  seen_first_time: boolean;
}

export interface Card {
  current_limit: CurrentLimit;
  display_number: null;
  type: null;
  status: Status;
  potential_limit: CurrentLimit;
  lower_limit: CurrentLimit;
  next_increase: CurrentLimit;
  period: Period;
}

export interface CurrentLimit {
  amount: number;
  currency_code: CurrencyCode;
}

export enum CurrencyCode {
  Mxn = 'MXN',
}

export interface Period {
  current_period: string;
  status: string;
  period_detail: PeriodDetail[];
}

export interface PeriodDetail {
  period_id: string;
  initial_date: Date;
  due_date: Date;
  accumulated_purchases: CurrentLimit;
  card_payment: CardPayment[];
  recurrent_payment: Assistance[];
  digital_channels: Assistance[];
  domiciliation: Assistance[];
  assistance: Assistance[];
  payroll_portability: Assistance[];
  status: string;
}

export interface Assistance {
  id: string;
  status: Status;
  operation_date: Date;
}

export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export interface CardPayment {
  amount_payment_current: AmountPaymentCurrent;
  amount_payment: CurrentLimit;
  minimum_amount: CurrentLimit;
  operation_date: Date;
}

export interface AmountPaymentCurrent {
  amount:                 number;
  currency_code:          string;
  operation_date_current: Date;
}
