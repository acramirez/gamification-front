const PROXY_CONFIG = [
  {
      context: [
          "/api/session",
          "/credits/v2/credits/customer-key/benefits"
      ],
      target: "https://mx-gamification-front-mx-gamification-web-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp",
      secure: false,
      changeOrigin: true
  }
]

module.exports = PROXY_CONFIG;
