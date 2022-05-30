// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tkn:{
    url:'https://nginx-gamification-mx-gamification-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/api/session',

  },
  gamification:{
    // url:"https://gamification-service-mx-gamification-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/credits/v2/credits/623a6e307ac5946aa98d388e/benefits",
    url:"https://nginx-gamification-mx-gamification-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/credits/v2/credits/234343234/benefits",
    dummy: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3NjEyMzQ1NiIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.RFduX4JZUkhFuikFOTfKAJk-aXYx7pX37FZFgdaWw0w'

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
