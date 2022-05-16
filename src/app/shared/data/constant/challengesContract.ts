import { ChallengesContract } from "../../interfaces/response/challengesContract.interface";

export const challengesContract:ChallengesContract={
    challenges: [
      {
        id: "card_acquaintanceship",
        name: "Conoce tu tarjeta",
        description: "Conoce las características de tu tarjeta Santander LikeU",
        specs: [
          "Compras seguras ",
          "CVV  dinámico para todas tus compras en línea y tarjeta física ¡sin números! ",
          "Sin anualidad ",
          "Olvídate de cargos sorpresa, ¡la anualidad va por nuestra cuenta! ",
          "Personalización ",
          "Contrata los beneficios que realmente necesites. ",
          "Apoya una causa ",
          "Apoya una causa dependiendo el color de la tarjeta LikeU que tú elijas.",
          "Recompensas ",
          "Todas tus compras en línea generan recompensas. ",
          "2x1 en Cinépolis ",
          "10% de descuento en Despegar.com ",
          "30% de bonificación en WOW+ de Grupo ALSEA ",
          "3 meses gratis de UBERpass ",
          "Garantía Extendida y Protección de Compras ",
          "Usa tu tarjeta y ¡hazla ¡LikeU!"   
        ],
        conditions: [
          "Tu tarjeta de Crédito LikeU tiene beneficios increíbles que podrás disfrutar desde el primer día como: ",
        ],
        icon:"card",
        redirection: false
      },
      {
        id: "minimum_monthly_billing",
        name: "Usa tu tarjeta",
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
        id: "card_payment",
        name: "Paga tu tarjeta",
        description: "Conoce los beneficios exclusivos de activar una asistencia Iké",
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
        icon:"card",
        redirection: false
      },
      {
        id: "recurrent_payment",
        name: "Activa un pago recurrente",
        description: "Conoce los beneficios exclusivos de activar un pago recurrente",
        specs: [
        ],
        conditions: [
          "Paga los servicios de streaming, música o telefonía con tu tarjeta LikeU y ¡dale play a tu entretenimiento!"
        ],
        icon:"clock",
        redirection: false
      },
      {
        id: "payroll_portability",
        name: "Portabilidad de nómina",
        description: "No lo pienses más y trae tu nómina con nosotros.",
        specs: [
          "Santander Plus ",
          "El programa sin costo donde obtendrás: bonificaciones, promociones y descuentos. ",
          "Seguro por muerte accidental",
          "Hasta por $50,000 pesos",
          "Asistencia funeraria ",
          "Sin costo para titular, cónyugue y un hijo, llamando al 800 703 6600",
        ],
        conditions: [
          "Hazlo y disfruta de beneficios como:"
        ],
        icon:"briefcase",
        redirection: false
      },
      {
        id: "assistance",
        name: "Contrata una asistencia Iké",
        description: "Conoce los beneficios exclusivos de activar una asistencia Iké",
        specs: [
        ],
        conditions: [
          "La vida está llena de momentos para compartir e IKÉ se encargará de los disfrutes al máximo. Contrata la asistencia IKÉ que mejor te convenga con tu tarjeta Likeu."
        ],
        icon:"squares",
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
        icon:"lightning",
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
          "card_payment",
          "digital_channels"
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
          "card_payment",
          "digital_channels"
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
          "minimum_monthly_billing",
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
          "minimum_monthly_billing",
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
    challengeCount: 22,
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