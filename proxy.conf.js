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

module.exports = PROXY_CONFIG;
