// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tkn:{
    url:'https://nginx-gamification-mx-gamification-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/api/session',
    dummy: 'qKFISEequAG4lNeJVpR4VotCLJAY0bTod2z5wx59z9GJ3zl2mF8svK8xUJNXw+05NQVe6QS+3PYtgHH8sUH4L9Ft/x5ySU8iEseoEz5ok6PruTuF6PfzXzRHvixcX2bZ0fRS+ttnc1GZJNxoGwIsfoiAILWK+hRYsMZ8jdtKXtTKlxkbi3HTxMUrWwpvn6xirXLDYnJFaejVHBKITeyWWKDuMjlxKIbxFV5PICCplTUVB+fkONyejd74sLbjBAUT68Fm03cwVGUhMQ3ljOSlZFKIyE7L4ketuvKmgxHcsCi8ST/XNk/8t5uD/Q6CBSeWhF2awPzM8apN3hJFqgVpDQ=='

  },
  gamification:{
    url:"https://gamification-service-mx-gamification-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/credits/v2/credits/623a6e307ac5946aa98d388e/benefits",
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
