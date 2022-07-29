import { ChallengesContract } from '../../../app/shared/interfaces/response/challengesContract.interface';

export const challengesContract: ChallengesContract = {
  challenges: [
    {
      id: 'welcome_challenge',
      title: 'Bienvenido al Reto LikeU',
      description:
        '¡Comencemos! Conoce los detalles de tu tarjeta LikeU y los objetivos para alcanzar tu límite potencial.',
      specs: [
        {
          spec: ['Asegúrate de activar tu tarjeta digital y física LikeU.'],
        },
        {
          spec: [
            'Recuerda que tu NIP para comprar con tu tarjeta física, lo asignaste al momento de contratarla. Si lo olvidaste, asígnalo desde SúperWallet y confírmalo en un cajero Santander.',
          ],
        },
        {
          spec: [
            'Conoce la fecha de corte y fecha límite de pago dentro de SúperWallet, al hacer clic en la imagen de tu tarjeta.',
          ],
        },
        {
          spec: [
            'El reto se compone de 7 misiones, que inician después de la primera fecha de corte de tu tarjeta.',
          ],
        },
        {
          spec: [
            'Descubre cada objetivo a cumplir, ingresando a “Tus Objetivos” 🎯.',
          ],
        },
        {
          spec: [
            'Encuentra más información sobre el reto dentro de Preguntas Frecuentes.',
          ],
        },
      ],
      conditions: [],
      icon: 'bienvenidos',
      redirection: false,
    },
    {
      id: 'missions',
      title: 'Tus Objetivos',
      specs: [
        {
          title: '1. Usa tu tarjeta:',
          spec: ['Consume al menos $200 MXN durante el Reto LikeU.'],
        },
        {
          title: '2. Paga tu tarjeta:',
          spec: [
            'Cubre al menos el pago mínimo mensual; recuerda que puedes pagarla desde SuperMóvil y Súper Wallet. Si pagas 50% más del mínimo, alcanzarás tu límite potencial más rápido. ',
          ],
        },
        {
          title:
            '3. Vincula tu tarjeta cumpliendo al menos una de las siguientes acciones cada mes:',
          spec: [
            'Domicilia el pago de tu LikeU: Contrata en sucursal el servicio de pago mensual automático de tu tarjeta LikeU, con cargo a tu cuenta de nómina o cheques.',
            'Cargo recurrente: Suscribe el cargo mensual de algún servicio (TV, telefonía, luz, servicios de streaming, etc.) a tu tarjeta LikeU, a través de SuperLínea, SuperMóvil o directamente con el prestador de servicio.',
            'Asistencias LikeU: Activa un plan anual de asistencia desde Súper Wallet dentro de la opción "Personalizar".',
            'Portabilidad de Nómina: Trae tu nómina a Santander desde SúperMóvil, SuperNET o en sucursal.',
          ],
        },
        {
          title: '4. Uso de canales digitales:',
          spec: [
            'Ingresa por lo menos una vez al mes, a alguno de los canales digitales de Santander (SuperNET, SuperMóvil o Súper Wallet) y administra o conoce los detalles de tu tarjeta.',
          ],
        },
        {
          title:
            'Los Objetivos se acumulan, por lo que debes continuar cumpliéndolos durante todo el Reto LikeU.',
        },
      ],
      conditions: [],
      icon: 'retos',
      redirection: false,
    },
    {
      id: 'credit_increase',
      title: 'Incremento de línea de crédito',
      titlemodal: 'Incrementos de Línea de crédito',
      description:
        'Los incrementos son automáticos y se generan al cumplir las misiones de acuerdo a tu fecha de corte.',
      specs: [
        {
          spec: [
            'Al completar las primeras 4 misiones obtendrás un incremento con el que alcanzarás un 50% de tu límite potencial. Acelera tu reto pagando 50% o más del mínimo en la misión 4 y obtén un 10% adicional (60% del límite potencial).',
            'Cumpliendo la misión 5 obtendrás un incremento con el que alcanzarás el 70% de tu límite potencial. Acelera tu reto pagando 50% o más del mínimo en la misión 5 y obtén un 10% adicional (80% del límite potencial).',
            'Con la misión 6, obtendrás un incremento con el que alcanzarás el 90% de tu límite potencial. Acelera tu reto pagando 50% o más del mínimo en la misión 6 y obtén un 10% adicional (100% del límite potencial).',
            'Por último, al completar la misión 7, alcanzarás el 100% de tu límite potencial y finalizarás el Reto LikeU.',
          ],
        },
        {
          title:
            'Duración aproximada del Reto LikeU: 7 meses o menos, si utilizas tu acelerador.',
        },
      ],
      conditions: [],
      icon: 'incrementos',
      redirection: false,
    },
    {
      id: 'card_acquaintanceship',
      title: 'Conoce tu tarjeta',
      subtitle: 'Conoce las características de tu tarjeta Santander LikeU.',
      description:
        'Tu tarjeta de Crédito LikeU tiene beneficios increíbles que podrás disfrutar desde el primer día como:',
      specs: [
        {
          title: 'Sin anualidad',
          spec: [
            'Además, si la usas mes a mes, no pagarás la Comisión de Mantenimiento y Administración.',
          ],
        },
        {
          title: 'Beneficios especiales',
          spec: [
            '2x1 en Cinépolis',
            '10% de descuento en Despegar.com',
            '30% de bonificación en WOW+ de Grupo ALSEA',
            '3 meses gratis de UBERpass',
            'Garantía Extendida y Protección de Compras',
          ],
        },
        {
          title: 'Usa tu tarjeta y ¡hazla LikeU!',
        },
      ],
      conditions: [],
      icon: 'Conoce_tu_tarjeta',
    },
    {
      id: 'accumulated_purchases',
      title: 'Usa tu tarjeta',
      subtitle:
        'Consume al menos $200 MXN al mes, de acuerdo a tu fecha de corte',
      specs: [
        {
          spec: [
            'Recuerda realizar compras seguras por internet utilizando el CVV dinámico de tu tarjeta LikeU, lo puedes consultar en SúperWallet.',
          ],
        },
      ],
      conditions: [],
      icon: 'Conoce_tu_tarjeta',
    },
    {
      id: 'card_payment',
      title: 'Paga tu tarjeta',
      subtitle:
        'Mantén al corriente tus pagos, ahorra tiempo y hazlo desde la app.',
      specs: [
        {
          spec: [
            'Cubre al menos el pago mínimo mensual; recuerda que puedes pagarla desde SuperMóvil y SuperWallet.',
          ],
        },
        {
          spec: [
            'Si pagas 50% más del mínimo, obtendrás un incremento con el que alcanzarás tu límite potencial más rápido.',
          ],
        },
      ],
      conditions: [],
      icon: 'Paga_tu_tarjeta',
      redirection: false,
    },
    {
      id: 'payroll_portability',
      title: 'Solicita tu portabilidad de nómina',
      titlemodal: 'Trae tu nómina a Santander',
      subtitle: 'Solicita la portabilidad de tu nómina desde la app.',
      description: 'Hazlo y obtén beneficios como:',
      specs: [        
        {
          title: 'Seguro por muerte accidental',
          spec: ['Hasta por $50,000 pesos'],
        },        
        {
          title: 'Asistencia funeraria',
          spec: [
            'Sin costo para el titular',
          ],
        },
        {
          title: 'Retiros ATM sin costo',
          spec: [
            'Bonificación de 2 comisiones al mes por retiro de efectivo en cajeros de otros bancos.',
          ],
        },
        {
          spec:['Recuerda que puedes solicitar tu portabilidad desde SúperMóvil, en minutos.']
        }
      ],
      conditions: [],
      icon: 'Portabilidad_nomina',
      redirection: false,
    },
    {
      id: 'domiciliation',
      title: 'Domicilia el pago de  tu tarjeta',
      titlemodal: 'Programa el pago automático mensual de tu LikeU',
      subtitle: 'Fácil y rápido',
      specs: [
        {
          spec: [
            'Olvídate de pagar comisiones por pago tardío, domicilia el pago de tu tarjeta LikeU a tu tarjeta de débito o cheques y cada mes se tomará de tu cuenta Santander el monto que hayas solicitado en tu servicio de domiciliación.',
          ],
        },
        {
          spec: ['*Contratación en sucursal.'],
        },
      ],
      conditions: [],
      icon: 'Conoce_tu_tarjeta',
      redirection: false,
    },
    {
      id: 'recurrent_payment',
      title: 'Formaliza el cobro de cargos recurrentes',
      subtitle: 'Pagos recurrentes',
      specs: [
        {
          spec: [
            'Formaliza el cargo recurrente de algún servicio con tu tarjeta LikeU. Puedes solicitarlo en Santander o directamente con los proveedores de servicios.',
          ],
        },
        {
          spec: [
            'Se consideran cargos recurrentes aquellos que implican pagos periódicos por el uso de algún servicio (ejemplo: CFE, Escuelas, Gimnasios, servicios de streaming, etc.).',
          ],
        },
      ],
      conditions: [],
      icon: 'Pagos_recurrentes',
      redirection: false,
    },
    {
      id: 'assistance',
      title: 'Activa una asistencia LikeU',
      subtitle:
        'Conoce los beneficios exclusivos de activar una asistencia LikeU.',
      specs: [
        {
          spec: [
            'Activa desde Súper Wallet cualquiera de las 6 asistencias LikeU que mejor te convenga. (Las asistencias en periodos menores a un año no suman al reto).',
          ],
        },
      ],
      conditions: [],
      icon: 'Asistencia_ike',
      redirection: false,
    },
    {
      id: 'digital_channels',
      title: 'Usa los canales digitales',
      titlemodal: 'Canales Digitales',
      subtitle: 'Ahorra tiempo desde web y app',
      specs: [
        {
          spec: [
            'A partir de la misión 4, ingresa por lo menos una vez al mes a alguno de los canales digitales de Santander (SuperNET, SuperMóvil o Súper Wallet) y consulta tu saldo, paga tu tarjeta, realiza transferencias, conoce la información de tu tarjeta y muchos más.',
          ],
        },
      ],
      conditions: [],
      icon: 'Canales_Digitales',
      redirection: false,
    },
    {
      id: 'higher_payment',
      title: 'Pago mayor al mínimo (Acelerador)',
      titlemodal: 'Acelerador LikeU',
      subtitle:
        'Alcanza más rápido el límite potencial de crédito de tu LikeU.',
      specs: [
        {
          spec: [
            'Este es un acelerador que podrás utilizar para completar más rápido el Reto LikeU. Solo tienes que pagar 50% más del monto mínimo mensual.',
          ],
        },
      ],
      icon: 'Pago_minimo',
      redirection: false,
    },
  ],
  missions: [
    {
      id: '0',
      mandatoryChallenges: [
        'welcome_challenge',
        'missions',
        'credit_increase',
        'card_acquaintanceship',
      ],
      specialChallenges: [],
      acceleratorChallenges: [],
      creditIncrease: false,
    },
    {
      id: '1',
      mandatoryChallenges: ['accumulated_purchases', 'card_payment'],
      specialChallenges: [],
      acceleratorChallenges: [],
      creditIncrease: false,
    },
    {
      id: '2',
      mandatoryChallenges: ['accumulated_purchases', 'card_payment'],
      specialChallenges: [],
      acceleratorChallenges: [],
      creditIncrease: false,
    },
    {
      id: '3',
      mandatoryChallenges: ['accumulated_purchases', 'card_payment'],
      specialChallenges: [],
      acceleratorChallenges: [],
      creditIncrease: true,
    },
    {
      id: '4',
      mandatoryChallenges: [
        'accumulated_purchases',
        'card_payment',
        'digital_channels',
      ],
      specialChallenges: [],
      acceleratorChallenges: ['higher_payment'],
      creditIncrease: true,
    },
    {
      id: '5',
      mandatoryChallenges: [
        'accumulated_purchases',
        'card_payment',
        'digital_channels',
      ],
      specialChallenges: [
        'payroll_portability',
        'domiciliation',
        'recurrent_payment',
        'assistance',
      ],
      acceleratorChallenges: ['higher_payment'],
      creditIncrease: true,
    },
    {
      id: '6',
      mandatoryChallenges: [
        'accumulated_purchases',
        'card_payment',
        'digital_channels',
      ],
      specialChallenges: [
        'payroll_portability',
        'domiciliation',
        'recurrent_payment',
        'assistance',
      ],
      acceleratorChallenges: ['higher_payment'],
      creditIncrease: false,
    },
    {
      id: '7',
      mandatoryChallenges: [
        'accumulated_purchases',
        'card_payment',
        'digital_channels',
      ],
      specialChallenges: [
        'payroll_portability',
        'domiciliation',
        'recurrent_payment',
        'assistance',
      ],
      acceleratorChallenges: [],
      creditIncrease: false,
    },
  ],
  challengeCount: 20,
  missionsCount: 6,
  FAQ: [
    {
      question: '¿Qué es el Reto LikeU?',
      answer:
        'Es un conjunto de objetivos que tendrás que completar en 7 misiones para incrementar el límite de crédito de tu tarjeta LikeU.',
      additionalInfo: '*Consulta beneficios, términos y condiciones en ',
      link: 'www.santander.com.mx/personas/tarjetas-de-credito/likeu.html',
    },
    {
      question: '¿Cómo puedo avanzar en el Reto LikeU?',
      answer:
        'Cumpliendo diferentes objetivos como: usar tu tarjeta, pagar más del mínimo, domiciliar el pago de tu tarjeta, activar una asistencia LikeU, formalizar cargos recurrentes y utilizar los canales digitales.',
      additionalInfo: '',
      link: '',
    },
    {
      question: '¿Cómo llego al límite de crédito potencial?',
      answer:
        'Lo alcanzarás cuando logres las 7 misiones,  para avanzar más rápido puedes pagar 50% más de tu pago mínimo mensual y finalizarlo solo 6 misiones.',
      additionalInfo: '',
      link: '',
    },
    {
      question:
        '¿Qué pasa con mi tarjeta LikeU si no cumplo con alguno de los objetivos del Reto?',
      answer:
        'Podrás continuar usando tu tarjeta LikeU con el límite de crédito inicial o el que hayas alcanzado durante el reto, dependiendo del número de misiones completadas.',
      additionalInfo: '',
      link: '',
    },
    {
      question: '¿Cuánto tiempo dura el Reto LikeU?',
      answer:
        '6 periodos de facturación completos; aproximadamente 7 o 6 meses, en caso del cumplimiento de tu acelerador.​',
      additionalInfo: '',
      link: '',
    },
    {
      question:
        '¿Si hago una compra a meses sin intereses puede servir para cubrir el monto mínimo de consumo de $200 pesos al mes?​',
      answer:
        'No, la compra sólo contará como consumo durante el mes de su realización por la cantidad total, los meses de pago subsecuentes no se consideran como nuevos consumos.',
      additionalInfo: '',
      link: '',
    },
    {
      question:
        'Si no cumplo con algún objetivo en alguna de las misiones, ¿se puede extender mi Reto?',
      answer:
        'No, el cumplimiento de las misiones y objetivos debe ser constante durante el reto. Si en alguna misión, no cumples con uno de los objetivos, se dará por concluido el Reto.',
      additionalInfo: '',
      link: '',
    },
    {
      question: '¿Cómo acelero el avance de mi Reto?​',
      answer:
        'A partir de la Misión 4, paga 50% más del monto mínimo mensual y acelera tu avance en el Reto. Por ejemplo, si tu pago mínimo es de $100 MXN, tendrías que pagar $150 MXN.',
      additionalInfo: '',
      link: '',
    },
  ],
};
