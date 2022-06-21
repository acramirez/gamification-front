import { ChallengesContract } from "../../../app/shared/interfaces/response/challengesContract.interface";

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
        icon:"Conoce_tu_tarjeta",
      },
      {
        id: "accumulated_purchases",
        name: "Usa tu tarjeta",
        description: "Facturación minima de $200 pesos MN (equiparable al monto de consumo mínimo del producto LIKEU).",
        specs: [
          "La facturación del periodo puede incluir los cargos de las compras a meses con o sin intereses."
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"Conoce_tu_tarjeta",
        redirection: false
      },
      {
        id: "card_payment",
        name: "Paga tu tarjeta",
        description: "Que realice el pago correspondiente al concepto de pago mínimo antes de la fecha limite de pago del periodo.",
        specs: [
          "Esta regla se mide en los 20 dias correspondientes al periodo de pago"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"Paga_tu_tarjeta",
        redirection: false
      },
      {
        id: "domiciliation",
        name: "Domicilia tu tarjeta",
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
        icon:"Conoce_tu_tarjeta",
        redirection: false
      },
      {
        id: "recurrent_payment",
        name: "Activa un pago recurrente",
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
        icon:"Pagos_recurrentes",
        redirection: false
      },
      {
        id: "payroll_portability",
        name: "Portabilidad de nómina",
        description: "Tener activo el servcio de portabilidad de pago de nómina",
        specs: [
          "Portabilidad Efectiva",
          "Marca de portabilidad + dispersión"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"Portabilidad_nomina",
        redirection: false
      },
      {
        id: "assistance",
        name: "Contrata una asistencia Iké",
        description: "Tener contratada una asistencia de LikeU por un perido de 1 año",
        specs: [
          "De cualquiera de las asistencias se debe contar con la factura correspondiente a 1 año, este es un evento unico no es recurrente"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"Asistencia_ike",
        redirection: false
      },
      {
        id: "digital_channels",
        name: "Usa los canales digitales",
        description: "La validación consite en medir el uso en los últimos 3 meses a cada mes de validación, para el 5 debe tenerla el 3, 4, 5; y para el 6, será el 4, 5, 6.",
        specs: [
          "Variable existente en los KPI´s de Digital Performance"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"Canales_Digitales",
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
        icon:"Pago_minimo",
        redirection: false
      },
      {
        id: "welcome_challenge",
        name: "Pago mayor al mínimo",
        description: "Se deberá considerar como base el campo de pago mínimo.",
        specs: [
          "Que pague al menos un 50% más del monto mínimo"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"bienvenidos",
        redirection: false
      },
      {
        id: "missions",
        name: "Pago mayor al mínimo",
        description: "Se deberá considerar como base el campo de pago mínimo.",
        specs: [
          "Que pague al menos un 50% más del monto mínimo"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"retos",
        redirection: false
      },
      {
        id: "credit_increase",
        name: "Pago mayor al mínimo",
        description: "Se deberá considerar como base el campo de pago mínimo.",
        specs: [
          "Que pague al menos un 50% más del monto mínimo"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"incrementos",
        redirection: false
      },
      {
        id: "know_your_card",
        name: "Pago mayor al mínimo",
        description: "Se deberá considerar como base el campo de pago mínimo.",
        specs: [
          "Que pague al menos un 50% más del monto mínimo"
        ],
        conditions: [
          "Solo aplicable en portabilidades dispensando en Santander"
        ],
        icon:"Conoce_tu_tarjeta",
        redirection: false
      },
    ],
    missions: [
      {
        id: "0",
        mandatoryChallenges: [
          "welcome_challenge",
          "missions",
          "credit_increase",
          "know_your_card"
        ],
        specialChallenges: [

        ],
        acceleratorChallenges: [],
        creditIncrease: false
      },
      {
        id: "1",
        mandatoryChallenges: [
          "accumulated_purchases",
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
          "accumulated_purchases",
          "card_payment",
        ],
        specialChallenges: [
        ],
        acceleratorChallenges: [],
        creditIncrease: false
      },
      {
        id: "3",
        mandatoryChallenges: [
          "accumulated_purchases",
          "card_payment",
          "digital_channels"
        ],
        specialChallenges: [

        ],
        acceleratorChallenges: [
        ],
        creditIncrease: true
      },
      {
        id: "4",
        mandatoryChallenges: [
          "accumulated_purchases",
          "card_payment",
          "digital_channels"
        ],
        specialChallenges: [
          "payroll_portability",
          "domiciliation",
          "recurrent_payment",
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
          "accumulated_purchases",
          "card_payment",
          "digital_channels"
        ],
        specialChallenges: [
          "payroll_portability",
          "domiciliation",
          "recurrent_payment",
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
          "accumulated_purchases",
          "card_payment",
          "digital_channels"
        ],
        specialChallenges: [
          "payroll_portability",
          "domiciliation",
          "recurrent_payment",
          "assistance",
        ],
        acceleratorChallenges: [],
        creditIncrease: false
      }
    ],
    challengeCount: 20,
    missionsCount: 6,
    FAQ: [
      {
        question: "¿Qué es el reto Like U?",
        answer: "Incrementa tu línea de crédito de forma automática cumpliendo los objetivos para alcanzar tu potencial financiero.",
        additionalInfo: "*Consulta beneficios, términos y condiciones completos en",
        link: "www.santander.com.mx/personas/tarjetas-de-credito/likeu.html"
      },
      {
        question: "¿Cómo puedo avanzar en las misiones?",
        answer: "Superando retos que aparecen en las misiones como: Conoce tu tarjeta, paga más del mínimo, domicilia pagos, etc. ",
        additionalInfo: "",
        link: ""
      },
      {
        question: "¿Cuándo se incrementa mi crédito?",
        answer: "Tu crédito comenzará a aumentar cuando superes los retos de la tercera misión en adelante. Si lo prefieres, puedes usar el comodín: Paga más del mínimo, para incrementar tu línea de crédito. ",
        additionalInfo: "",
        link: ""
      },
      {
        question: "¿Qué pasa con mi tarjeta LikeU si no cumplo con los retos de las misiones?",
        answer: "La podrás seguir usando con toda normalidad. Sin embargo, tu línea de crédito no aumentaría debido a que no estás superando las misiones del Reto LikeU. ¡Anímate y participa!",
        additionalInfo: "",
        link: ""
      }
    ]
  }