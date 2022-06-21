import { ChallengesContract } from "../../../app/shared/interfaces/response/challengesContract.interface";

export const challengesContract:ChallengesContract={
    challenges: [
      {
        id: "welcome_challenge",
        title: "Bienvenido al Reto LikeU",
        description: "Misión cero ¡prepárate!... Conoce los detalles de tu LikeU y las misiones a cumplir en cada ciclo para alcanzar tu límite potencial.",
        specs: [
          {
            spec:["Asegúrate de activar tu tarjeta digital y física LikeU."]
          },
          {
            spec:["Recuerda que tu NIP para comprar con tu tarjeta física, lo asignaste al momento de contratarla. Si lo olvidaste, asígnalo desde SúperWallet y confírmalo en un cajero Santander."]
          },
          {
            spec:["Conoce la fecha de corte y fecha límite de pago dentro de Súper Wallet, al hacer clic en la imagen de tu tarjeta."]
          },
          {
            spec:["El reto se compone de 4 misiones durante 6 ciclos, que inician después de la primer fecha de corte y de tu primera fecha de pago."]
          },
          {
            spec:["Descubre cada misión del reto LikeU, ingresando a \"Las misiones\" 🎯."]
          },
          {
            spec:["Encuentra más información sobre el reto dentro de Preguntas Frecuentes."]
          },
        ],
        conditions: [
        ],
        icon:"bienvenidos",
        redirection: false
      },
      {
        id: "card_acquaintanceship",
        title: "Conoce tu tarjeta",
				subtitle: "Conoce las características de tu tarjeta Santander LikeU.",
        description: "Tu tarjeta de Crédito LikeU tiene beneficios increíbles que podrás disfrutar desde el primer día, como:",
        specs: [
          {
            title:"Sin anualidad",
            spec:["Úsala mes a mes y olvídate de la anualidad, de por vida."]
          },
          {
            title:"Beneficios especiales",
            spec:["2x1 en Cinépolis", "10% de descuento en Despegar.com", "30% de bonificación en WOW+ de Grupo ALSEA","3 meses gratis de UBERpass", "Garantía Extendida y Protección de Compras"]
          },
          {
            title:"Usa tu tarjeta y ¡hazla LikeU!  "
          }
        ],
        conditions: [
          
        ],
        icon:"Conoce_tu_tarjeta",
      },
      {
        id: "accumulated_purchases",
        title: "Usa tu tarjeta",
				subtitle: "Gasta $200 MXN pesos al mes.",
        specs: [
          {
            spec:["Recuerda realizar compras seguras en internet utilizando el CVV dinámico de tu tarjeta en LikeU, lo puedes consultar en Súper Wallet."]
          }
        ],
        conditions: [
        ],
        icon:"Conoce_tu_tarjeta",
      },
      {
        id: "card_payment",
        title: "Paga tu tarjeta",
				subtitle: "Mantén al corriente tus pagos, conoce tu fecha límite de pago en la app.",
        specs: [
          {
            spec:["Cubre al menos el pago mínimo mensual; recuerda que puedes pagarla desde SuperMóvil."]
          },
          {
            spec:["Si pagas 50% más del mínimo, alcanzarás tu límite potencial de crédito más rápido."]
          },
          
          
        ],
        conditions: [
        ],
        icon:"Paga_tu_tarjeta",
        redirection: false
      },
      {
        id: "payroll_portability",
        title: "Trae tu nómina a Santander",
        subtitle: "Realiza la portabilidad de nómina desde la app.",
        description:"Hazlo y obtén beneficios como:",
        specs: [
          {
            title:"Santander Plus",
            spec:["El programa sin costo donde obtendrás: bonificaciones, promociones y descuentos."]
          },
          {
            title:"Seguro por muerte accidental",
            spec:["Hasta por $50,000 pesos"]
          },
          {
            title:"Asistencia funeraria",
            spec:["Sin costo para titular, cónyugue y un hijo, llamando al 800 703 6600"]
          }
        ],
        conditions: [
        ],
        icon:"Portabilidad_nomina",
        redirection: false
      },
      {
        id: "domiciliation",
        title: "Domicilia tus pagos",
				subtitle: "Programa el pago automático mensual de tu LikeU.",
        specs: [
          {
            spec:["Olvídate de pagar comisiones por pago tardío, solicita la domiciliación del pago mensual de tu LikeU con tu tarjeta de débito o cheques y cada mes, se tomará de tu cuenta Santander el monto que hayas solicitado en tu servicio de domiciliación."]
          },
          {
            spec:["* Contratación forzosa en sucursal. "]
          },
          {
            spec:["¡Te ayudamos a construir y mantener un buen historial crediticio!"]
          },
        ],
        conditions: [
        ],
        icon:"Conoce_tu_tarjeta",
        redirection: false
      },
      {
        id: "recurrent_payment",
        title: "Activa un pago recurrente",
				subtitle: "Domicilia el pago de servicios.",
        specs: [
          {
            spec:["Solicitar la domiciliación del pago con tu tarjeta LikeU, de algún servicio recurrente. Puedes solicitarlo en Santander o directamente con los proveedores de servicios.",]
          },
          {
            spec:["Se consideran pagos recurrentes los que implican pagos periódicos por el uso de algún servicio (ejemplo: CFE, Escuelas, Gimnasios, servicios de streaming, etc.)",]
          }
        ],
        conditions: [
        ],
        icon:"Pagos_recurrentes",
        redirection: false
      },

      {
        id: "assistance",
        title: "Contrata una asistencia Iké",
        subtitle: "Conoce los beneficios exclusivos de activar una asistencia Iké.",
        specs: [
          {
            spec:["La vida está llena de momentos para compartir e IKÉ se encargará de los disfrutes al máximo. Contrata la asistencia IKÉ que mejor te convenga con tu tarjeta Likeu."]
          }
          
        ],
        conditions: [
        ],
        icon:"Asistencia_ike",
        redirection: false
      },
      {
        id: "digital_channels",
        title: "Canales Digitales",
        specs: [
          {
            spec:["Ingresa por lo menos una vez al mes, a alguno de los canales digitales de Santander (SuperNET, SuperMóvil o Súper Wallet) y administra o conoce los detalles de tu tarjeta."]
          }
          
        ],
        conditions: [
        ],
        icon:"Canales_Digitales",
        redirection: false
      },
      {
        id: "higher_payment",
        title: "Paga más del mínimo",
        subtitle: "Alcanza más rápido el límite potencial de crédito de tu LikeU.",
        specs: [
          {
            spec:[
              "No olvides que pagar más del mínimo, es un comodín que puedes usar a partir de la tercera misión del Reto LikeU para incrementar tu línea de crédito.",
            ]
          },
          {
            spec:[
              "Si pagas 50% más del mínimo, acelerarás tu avance en el Reto LikeU."
            ]
          }
        ],
        icon:"Pago_minimo",
        redirection: false
      },
      {
        id: "missions",
        title: "Las Misiones",
        specs: [
          {
            title:"1. Usa tu tarjeta:",
            spec:["Consumo mínimo mensual de $200 pesos MXN durante el Reto LikeU."]
          },
          {
            title:"2. Paga tu tarjeta:",
            spec:["Cubre al menos el pago mínimo mensual; recuerda que puedes pagarla desde SuperMóvil. Si pagas 50% más del mínimo, alcanzarás tu límite potencial de crédito más rápido."]
          },
          {
            title:"3. Vincula tu tarjeta cumpliendo al menos una de las siguientes acciones cada mes:",
            spec:[
              "Domicilia el pago de tu LikeU: Contrata en sucursal el servicio de pago mensual automático de tu tarjeta LikeU, con cargo a tu cuenta de nómina o cheques. ",            
              "Cargo recurrente: Suscribe el cobro mensual de algún servicio (TV, telefonía, Luz, servicios de streaming, etc.) a tu tarjeta LikeU a través de SuperLínea, SuperMóvil o directamente con el prestador de servicio.",            
              "Asistencias IKÉ: Activa un plan de asistencia desde Súper Wallet dentro de la opción \"Personalizar\"",            
              "Portabilidad de Nómina: Trae tu nómina a Santander desde SúperMóvil, SuperNET o en sucursal.",            
            ]
          },
          {
            title:"4. Uso de canales digitales:",
            spec:[
              "Ingresa por lo menos una vez al mes, a alguno de los canales digitales de Santander (SuperNET, SuperMóvil o Súper Wallet) y administra o conoce los detalles de tu tarjeta.",
            ]
          },
        ],
        conditions: [
        ],
        icon:"retos",
        redirection: false
      },
      {
        id: "credit_increase",
        title: " Incrementos de Línea de crédito",
        description: "Los incrementos son automáticos y se generan al cumplir las misiones en los 6 ciclos.",
        specs: [
          {
            spec:[
              "Solo aplicable en portabilidades dispensando en Santander",
              "Cumpliendo con la misión 3 en el ciclo 4, obtendrás un incremento del 70% del límite de crédito potencial.",
              "Con la misión 4 en el ciclo 5, obtendrás un incremento del 90% de tu límite de crédito.",
              "Por último, al completar la misión 5 en el ciclo 6 alcanzarás el 100% de tu límite de crédito potencial y habrás finalizado el Reto LikeU."
            ]
          },
          {
            title:"¡Acelera el logro de tu límite potencial! ⚡️",
            spec:["Paga 50% más de tu pago mínimo mensual y finaliza el reto en solo 5 ciclos."]
          },
          {
            title:"Recuerda que cada misión es recurrente y debes repetirla durante todo el Reto LikeU (en cada uno de los 6 ciclos)."
          }
          
        ],
        conditions: [
          
        ],
        icon:"incrementos",
        redirection: false
      },
      {
        id: "know_your_card",
        title: "Pago mayor al mínimo",
        description: "Se deberá considerar como base el campo de pago mínimo.",
        specs: [
          {spec:["Que pague al menos un 50% más del monto mínimo"]}
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
          "card_acquaintanceship"
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
          "card_payment"
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
        question: "¿Qué es el Reto LikeU?",
        answer: "Es un reto en el que tendrás que completar varias misiones durante 6 ciclos para incrementar el límite de crédito de tu tarjeta LikeU.",
        additionalInfo: "*Consulta beneficios, términos y condiciones completos en",
        link: "www.santander.com.mx/personas/tarjetas-de-credito/likeu.html"
      },
      {
        question: "¿Cómo puedo avanzar en el Reto LikeU?",
        answer: "Cumpliendo diferentes misiones, como: Conoce tu tarjeta, Paga más del mínimo, Solicita cargos recurrentes, etc.",
        additionalInfo: "",
        link: ""
      },
      {
        question: "¿Cuándo se incrementa mi límite de crédito?",
        answer: "Tu límite de crédito incrementará cuando superes las misiones establecidas en los 6 ciclos. Si lo prefieres, puedes pagar 50% más de tu pago mínimo mensual y finalizar tu reto en sólo 5 ciclos.",
        additionalInfo: "",
        link: ""
      },
      {
        question: "¿Qué pasa con mi tarjeta LikeU si no cumplo con los objetivos del Reto LikeU?",
        answer: "Podrás continuar usando tu tarjeta LikeU con el límite de crédito inicial o el que hayas alcanzado durante el reto, dependiendo del número de ciclos completados.",
        additionalInfo: "",
        link: ""
      }
    ]
  }