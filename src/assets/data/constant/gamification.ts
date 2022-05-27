import { Gamification } from "src/app/shared/interfaces/response/gamification.interface";

export const gamification: Gamification = {
  data: {
    hiring_date:new Date( "2022-05-04T14:01:13.88"),
    contract_key: "76123456",
    activation_date:new Date( "2022-05-04T14:01:13.88"),
    type: "GM_7",
    status: "INITIAL",
    last_evaluation_date:new Date( "2022-05-04T14:01:13.88"),
    cut_of_date:new Date( "2022-04-18T20:44:30.924"),
    card: {
      current_limit: {
        amount: 6000,
        currency_code: "MXN"
      },
      display_number: '1242342',
      type: 'null',
      status: "ACTIVE",
      potential_limit: {
        amount: 20000,
        currency_code: "MXN"
      },
      lower_limit: {
        amount: 6000,
        currency_code: "MXN"
      },
      next_increase: {
        amount: 80000,
        currency_code: "MXN"
      },
      period: {
        current_period: "1",
        status: "DISABLE",
        period_detail: [
          {
            period_id: "1",
            initial_date:new Date( "2022-05-04T14:01:12.278"),
            due_date:new Date( "2022-04-18T20:44:30.924"),
            accumulated_purchases: {
              amount: 0,
              currency_code: "MXN"
            },
            card_payment: [
              {
                amount_payment: {
                  amount: 250,
                  currency_code: "MXN"
                },
                minimum_amount: {
                  amount: 500,
                  currency_code: "MXN"
                },
                operation_date:new Date( "2022-04-08T21:35:55.872")
              }
            ],
            recurrent_payment: [
              {
                id: "1",
                status: "INACTIVE",
                operation_date:new Date( "2022-04-14T12:20:53.596")
              }
            ],
            digitalChannels: [
              {
                id: "0122",
                status: "ACTIVE",
                operation_date:new Date( "2012-02-16T23:38:45.408")
              },
              {
                id: "0123",
                status: "ACTIVE",
                operation_date:new Date( "2012-02-16T23:38:45.408")
              }
            ],
            domiciliation: [
              {
                id: "1",
                status: "ACTIVE",
                operation_date:new Date( "2022-04-08T21:35:55.872")
              }
            ],
            assistance: [
              {
                id: "1",
                status: "INACTIVE",
                operation_date:new Date( "2022-04-10T21:35:55.872")
              }
            ],
            payroll_portability: [
              {
                id: "2",
                status: "ACTIVE",
                operation_date:new Date( "2022-04-08T21:35:55.872")
              }
            ],
            status: "FINISH"
          },
        ]
      }
    },
    seen_first_time: false
  },
  notifications: [
    {
      code: "SUCCESSFUL",
      level: "INFO",
      message: "successful",
      timestamp: "2022-05-26T22:42:58.208+0000"
    }
  ]
}