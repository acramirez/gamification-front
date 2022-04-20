import { Card, Status } from "../../interfaces/icard-details";
import { StatusPeriodDetails, StatusPeriodInfo } from "../../interfaces/iperiod-details";
import { Gamification } from "../../interfaces/iresponse-gamification";


export const gamificationData: Gamification={
  data: {
    customer_key: "00000020",
    hiring_date: new Date( 2022,2,16,23,38,45,408),
    contract_key: "213131315446",
    activation_date: new Date( 2022,2,16,23,38,45,408),
    type: "GM_2",
    status: "INITIAL",
    last_evaluation_date: new Date( 2022,2,16,23,38,45,408),
    cut_of_date: new Date( 2022,2,16,23,38,45,408),
    card:{
      current_limit: {
        amount: 50000,
        currency_code: "MXN"
      },
      display_number: "*8825",
      type: "LikeU Green Card",
      status: Status.ACTIVE,
      potential_limit: {
        amount: 50000,
        currency_code: "MXN"
      },
      lower_limit: {
        amount: 50000,
        currency_code: "MXN"
      },
      next_increase: {
        amount: 50000,
        currency_code: "MXN"
      },
      period: {
        current_period: "1",
        status: StatusPeriodInfo.ACTIVE,
        period_detail: [
          {
            period_id: "PERIOD_01",
            initial_date: new Date( 2022,2,16,23,38,45,408),
            due_date: new Date( 2022,2,16,23,38,45,408),
            acumulated_limit: {
              amount: 50000,
              currency_code: "MXN"
            },
            payment_card: [
              {
                amount_payment: {
                  amount: 50000,
                  currency_code: "MXN"
                },
                minimum_amount: {
                  amount: 50000,
                  currency_code: "MXN"
                },
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            recurring_payment: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            domiciliation: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            assintance: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            payroll: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            status:StatusPeriodDetails.FINISH
          },
          {
            period_id: "PERIOD_02",
            initial_date: new Date( 2022,2,16,23,38,45,408),
            due_date: new Date( 2022,2,16,23,38,45,408),
            acumulated_limit: {
              amount: 50000,
              currency_code: "MXN"
            },
            payment_card: [
              {
                amount_payment: {
                  amount: 50000,
                  currency_code: "MXN"
                },
                minimum_amount: {
                  amount: 50000,
                  currency_code: "MXN"
                },
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            recurring_payment: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            domiciliation: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            assintance: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            payroll: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            status:StatusPeriodDetails.ONGOING
          },          {
            period_id: "PERIOD_01",
            initial_date: new Date( 2022,2,16,23,38,45,408),
            due_date: new Date( 2022,2,16,23,38,45,408),
            acumulated_limit: {
              amount: 50000,
              currency_code: "MXN"
            },
            payment_card: [
              {
                amount_payment: {
                  amount: 50000,
                  currency_code: "MXN"
                },
                minimum_amount: {
                  amount: 50000,
                  currency_code: "MXN"
                },
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            recurring_payment: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            domiciliation: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            assintance: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            payroll: [
              {
                status: StatusPeriodInfo.ACTIVE,
                operation_date: new Date( 2022,2,16,23,38,45,408)
              }
            ],
            status:StatusPeriodDetails.ONGOING
          }
        ]
      }
    }
  }
}
