const PROXY_CONFIG = [
  {
      context: [
          "/api/session",
          "/credits/v2/credits/customer-key/benefits"
      ],
      target: "https://gamificacion.santander.pre.mx.corp/",
      secure: false,
      changeOrigin: true
  }
]

//TODO: Corregir ruta de target
module.exports = PROXY_CONFIG;
