import { ChallengesContract } from "../../interfaces/response/challengesContract.interface";

export const challengesContract:ChallengesContract={
    challenges: [
      {
        id: "card_acquaintanceship",
        name: "Conoce tu tarjeta",
        description: "Facturación minima de $200 pesos MN (equiparable al monto de consumo mínimo del producto LIKEU).",
        specs: [
          "La facturación del periodo puede incluir los cargos de las compras a meses con o sin intereses."
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"card",
        redirection: false
      },
      {
        id: "minimum_monthly_billing",
        name: "Facturacion minima mensual",
        description: "Facturación minima de $200 pesos MN (equiparable al monto de consumo mínimo del producto LIKEU).",
        specs: [
          "La facturación del periodo puede incluir los cargos de las compras a meses con o sin intereses."
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"",
        redirection: false
      },
      {
        id: "card_payment",
        name: "Pago mínimo",
        description: "Que realice el pago correspondiente al concepto de pago mínimo antes de la fecha limite de pago del periodo.",
        specs: [
          "Esta regla se mide en los 20 dias correspondientes al periodo de pago"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"calendar",
        redirection: false
      },
      {
        id: "domiciliation",
        name: "Domiciliación TDC",
        description: "Contratación activa del pago domiciliado de la TDC  (cuenta nómina o no nómina)",
        specs: [
          "Pago mínimo recurrente Nómina",
          "Pago total recurrente Nómina",
          "Monto Fijo Recurrente Nómina",
          "Pago mínimo recurrente"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"calendar",
        redirection: false
      },
      {
        id: "recurrent_payment",
        name: "Pago recurrente",
        description: "Suscripción de pago de servicio (telefonía o plataformas de streaming)",
        specs: [
          "Pago mínimo recurrente Nómina",
          "Pago total recurrente Nómina",
          "Monto Fijo Recurrente Nómina",
          "Pago mínimo recurrente"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"lightning",
        redirection: false
      },
      {
        id: "payroll_portability",
        name: "Portabilidad",
        description: "Tener activo el servcio de portabilidad de pago de nómina",
        specs: [
          "Portabilidad Efectiva",
          "Marca de portabilidad + dispersión"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"briefcase",
        redirection: false
      },
      {
        id: "assistance",
        name: "Asistencias",
        description: "Tener contratada una asistencia de LikeU por un perido de 1 año",
        specs: [
          "De cualquiera de las asistencias se debe contar con la factura correspondiente a 1 año, este es un evento unico no es recurrente"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"squares",
        redirection: false
      },
      {
        id: "digital_channels",
        name: "Uso de canales digitales",
        description: "La validación consite en medir el uso en los últimos 3 meses a cada mes de validación, para el 5 debe tenerla el 3, 4, 5; y para el 6, será el 4, 5, 6.",
        specs: [
          "Variable existente en los KPI´s de Digital Performance"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"bubble-chat",
        redirection: false
      },
      {
        id: "higher_payment",
        name: "Pago mayor al mínimo",
        description: "Se deberá considerar como base el campo de pago mínimo.",
        specs: [
          "Que pague al menos un 50% más del monto mínimo"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"",
        redirection: false
      }
    ],
    missions: [
      {
        id: "0",
        mandatoryChallenges: [
          "card_acquaintanceship",
          "card_payment"
        ],
        specialChallenges: [

        ],
        acceleratorChallenges: [],
        creditIncrease: false
      },
      {
        id: "1",
        mandatoryChallenges: [
          "minimum_monthly_billing",
          "card_payment"
        ],
        specialChallenges: [
        ],
        acceleratorChallenges: [],
        creditIncrease: false
      },
      {
        id: "2",
        mandatoryChallenges: [
          "minimum_monthly_billing",
          "card_payment"
        ],
        specialChallenges: [
        ],
        acceleratorChallenges: [],
        creditIncrease: false
      },
      {
        id: "3",
        mandatoryChallenges: [
          "minimum_monthly_billing",
          "card_payment"
        ],
        specialChallenges: [

        ],
        acceleratorChallenges: [
          "higher_payment"
        ],
        creditIncrease: true
      },
      {
        id: "4",
        mandatoryChallenges: [
          "minimum_monthly_billing",
          "card_payment",
          "digital_channels"
        ],
        specialChallenges: [
          "domiciliation",
          "recurrent_payment",
          "payroll_portability",
          "assistance"
        ],
        acceleratorChallenges: [
          "higher_payment"
        ],
        creditIncrease: true
      },
      {
        id: "5",
        mandatoryChallenges: [
          "minimum_monthly_billing",
          "card_payment",
          "digital_channels"
        ],
        specialChallenges: [
          "domiciliation",
          "recurrent_payment",
          "payroll_portability",
          "assistance",

        ],
        acceleratorChallenges: [
          "higher_payment"
        ],
        creditIncrease: true
      },
      {
        id: "6",
        mandatoryChallenges: [
          "minimum_monthly_billing",
          "card_payment",
          "digital_channels"
        ],
        specialChallenges: [
          "domiciliation",
          "recurrent_payment",
          "payroll_portability",
          "assistance",
        ],
        acceleratorChallenges: [],
        creditIncrease: false
      }
    ],
    challengeCount: 22,
    missionsCount: 6,
    FAQ: [
      {
        question: "¿Qué es el reto Like U?",
        answer: "Incrementa tu línea de crédito de forma automática cumpliendo los objetivos para alcancar tu potencial financiero. Incrementa tu línea de crédito de forma automática cumpliendo los objetivos para alcancar tu potencial financiero.",
        additionalInfo: "*Consulta beneficios, términos y condiciones completos en",
        link: "www.santander.com.mx/personas/tarjetas-de-credito/likeu.html"
      },
      {
        question: "¿Qué es el reto Like U?",
        answer: "Incrementa tu línea de crédito de forma automática cumpliendo los objetivos para alcancar tu potencial financiero.",
        additionalInfo: "*Consulta beneficios, términos y condiciones completos en",
        link: "www.santander.com.mx/personas/tarjetas-de-credito/likeu.html"
      },
      {
        question: "¿Qué es el reto Like U?",
        answer: "Incrementa tu línea de crédito de forma automática cumpliendo los objetivos para alcancar tu potencial financiero.",
        additionalInfo: "*Consulta beneficios, términos y condiciones completos en",
        link: "www.santander.com.mx/personas/tarjetas-de-credito/likeu.html"
      }
    ]
  }