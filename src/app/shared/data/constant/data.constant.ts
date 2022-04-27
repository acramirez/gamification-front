

export const challenges = {
  challenges: [
      {
          id: "1",
          validation: "Facturacion minima mensual",
          description: "$200 (equiparable al monto de consumo minimo del producto LIKEU)",
          cuttingPeriods: [
              {
                  id: 1,
                  percent: 0,
                  meet: true,
                  required: false
              },
              {
                  id: 2,
                  percent: 0,
                  meet: true,
                  required: false
              },
              {
                  id: 3,
                  percent: 0.5,
                  meet: true,
                  required: true
              },
              {
                  id: 4,
                  percent: 0.7,
                  meet: true,
                  required: false
              },
              {
                  id: 5,
                  percent: 0.9,
                  meet: true,
                  required: false
              },
              {
                  id: 6,
                  percent: 1.0,
                  meet: true,
                  required: false
              }
          ],
          rapidIncrease: false
      },
      {
          id: "2",
          validation: "Pago minimo",
          description: "que realice el pago minimo en cada mes puntual conforme a la fecha de pago",
          cuttingPeriods: [
              {
                  id: 1,
                  percent: 0,
                  meet: true,
                  required: false
              },
              {
                  id: 2,
                  percent: 0,
                  meet: true,
                  required: false
              },
              {
                  id: 3,
                  percent: 0.5,
                  meet: true,
                  required: true
              },
              {
                  id: 4,
                  percent: 0.7,
                  meet: true,
                  required: false
              },
              {
                  id: 5,
                  percent: 0.9,
                  meet: true,
                  required: false
              },
              {
                  id: 6,
                  percent: 1.0,
                  meet: true,
                  required: false
              }
          ],
          rapidIncrease: false
      },
      {
          id: "3a",
          validation: "Domiciliacion TDC",
          description: "Pago de TDC domiciliado a cuenta (nomina o no nomina)",
          cuttingPeriods: [
              {
                  id: 4,
                  percent: 0.7,
                  meet: true,
                  required: true
              },
              {
                  id: 5,
                  percent: 0.9,
                  meet: true,
                  required: false
              },
              {
                  id: 6,
                  percent: 1.0,
                  meet: true,
                  required: false
              }
          ],
          rapidIncrease: false
      },
      {
          id: "3b",
          validation: "Pago recurrente (suscripcion)",
          description: "Aplicable para clientes 'monoproductistas'",
          cuttingPeriods: [
              {
                  id: 4,
                  percent: 0.7,
                  meet: true,
                  required: true
              },
              {
                  id: 5,
                  percent: 0.9,
                  meet: true,
                  required: false
              },
              {
                  id: 6,
                  percent: 1.0,
                  meet: true,
                  required: false
              }
          ],
          rapidIncrease: false
      },
      {
          id: "3c",
          validation: "Contratar una asistencia (en validacion con riesgos)",
          description: "Definir el periodo de minimo de la contratacion",
          cuttingPeriods: [
              {
                  id: 4,
                  percent: 0.7,
                  meet: true,
                  required: true
              },
              {
                  id: 5,
                  percent: 0.9,
                  meet: true,
                  required: false
              },
              {
                  id: 6,
                  percent: 1.0,
                  meet: true,
                  required: false
              }
          ],
          rapidIncrease: false
      },
      {
          id: "3d",
          validation: "Portabilidad",
          description: "Que traiga su pago de nomina mediante la portabilidad",
          cuttingPeriods: [
              {
                  id: 4,
                  percent: 0.7,
                  meet: true,
                  required: true
              },
              {
                  id: 5,
                  percent: 0.9,
                  meet: true,
                  required: false
              },
              {
                  id: 6,
                  percent: 1.0,
                  meet: true,
                  required: false
              }
          ],
          rapidIncrease: false
      },
      {
          id: "4",
          validation: "Uso de canales digitales",
          description: "Uso vigente en los ultimos 3 meses (3, 4 y 5 o 4, 5 o 6). Variable existente",
          cuttingPeriods: [
              {
                  id: 5,
                  percent: 0.9,
                  meet: true,
                  required: false
              },
              {
                  id: 6,
                  percent: 1.0,
                  meet: true,
                  required: false
              }
          ],
          rapidIncrease: false
      },
      {
          id: "5",
          validation: "Pago mayor al minimo",
          description: "Se debera considerar el campo de pago minimo, aun cuando el cliente sea totalero. Que se pague el monto para no generar intereses o un % superior al minimo",
          cuttingPeriods: [
              {
                  id: 3,
                  percent: 0.6,
                  meet: true,
                  required: false
              },
              {
                  id: 4,
                  percent: 0.8,
                  meet: true,
                  required: false
              },
              {
                  id: 5,
                  percent: 1.0,
                  meet: true,
                  required: false
              }
          ],
          rapidIncrease: true
      }
  ] 
}
