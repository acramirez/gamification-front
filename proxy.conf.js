const PROXY_CONFIG = [
  {
      context: [
          "/api/session",
      ],
      target: "https://gamification-service-sec-mx-gamification-web-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/api/session",
      secure: false,
      changeOrigin: true
  },
  {
      context: [
          "/credits/v2/credits/customer-key/benefits"
      ],
      target: "https://gamification-service-mx-gamification-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/credits/v2/credits/customer-key/benefits",
      secure: false,
      changeOrigin: true
  },
]

module.exports = PROXY_CONFIG;
