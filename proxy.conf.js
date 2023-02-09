/* Configuracion de proxys en local*/
/* Para evitar la configuracion de CORS*/

const PROXY_CONFIG = [
  {
    /* url cortas*/
      context: [
          "/api/session",
          "/credits/v2/credits/customer-key/benefits"
      ],
      /*target para dev*/
      target: "https://mx-gamification-front-mx-gamification-web-dev.apps.str01.mex.dev.mx1.paas.cloudcenter.corp",
      secure: false,
      changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
