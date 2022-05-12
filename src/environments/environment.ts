// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tkn:{
    url:'https://otpmuro.pre.mx.corp/TokenManagerWeb/service/tokenmanager',
    apiService:{
      generator:'tokenGeneratorWS',
      validator:'tokenValidatorWS'
    },
    dummy: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDAwMDAwMyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.jUoYhM22tGisVe9ZI2c3n6gqX69mIp7Cc-i9a2HZYxk+bl2zEXo1DiV7UF6Jfb/xLKarIPV5VSGM3ja5EijBJaIHrmE0Sx89if3Gnf3yVsn7/iv9XG6Istp6s+wXacO62t/age2hANke1XScPBnW4Da/G0f7EtvWQqS3Yl7B5gLWOU6fgk25casxolC/EPC7vG1MMNBwYV2yYAubL3MnTT4NyxfP4p9TpT5IaRz1ipxUtUmg8n+tIcwyUrpLUc/07WsxY0TRqvoncZ0RCtRgk2VTI0a/yHCWtwUl/qnzFQpCpomLmNB36TOU5TJwJ9izgZpclV0dvg0elGUfRhLl0D+p+dLSA74NfdUigiZavYaFvjQ=='
  },
  gamification:{
    url:"https://gamification-service-mx-gamification-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/credits/v2/credits/623a6e307ac5946aa98d388e/benefits",
    dummy: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDAzMCIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.cNYqS5LbPAGc6lUUwTYvXvfhqMuoctsG72rkW5SZ8KM'
    
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
