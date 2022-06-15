import { TokenValidator } from "../../../app/shared/interfaces/response/opaqueToken.interface";

export const mockToken:TokenValidator={
    Status: {
      StatusCode: 0,
      StatusDesc: "EXITO"
    },
    SecObjRec: {
      SecObjInfoBean: {
        SecObjData: [
          {
            SecObjDataKey: "challenges",
            SecObjDataValue: "{\"challenges\": [\"card_payment\", \"domiciliation\", \"payroll_portability\", \"digital_channel\"], \"ultimoAcceso\" : \"hoy\"}",
            SecObjDataType: "STRING"
          },
          {
            SecObjDataKey: "buc",
            SecObjDataValue: "12345",
            SecObjDataType: "STRING"
          }
        ]
      }
    }
  }