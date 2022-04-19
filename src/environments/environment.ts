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
    dummy: 'wO3A0H34qYlzFUO12aZTgxMDpAJRfGwZcFK36MPA7t+MFcofx+JW0rKWWI7colTM4OT9skd4zyYONTS0Z1Bu3slfsdQEoMjI5eGzpxWEXyfkZI1t6JQjrTjZw8gNiJMFoWV0Y6hDouMGAR5yHj5QWd0LPx2tlhNot9TbsZc4JDqwXSbNhHQZ1yJfCHPcyYogo1dqEyQNU/TPZbDlZys2LzLa2FP6rrsuMcc3HsKiThJ1m2GBkaYe0R8isvnZliPl63DTPQFOGkxMk9Sgd2awjguGYqss89SpaSk/0aXDfTlnEDDsOIdAMoyvMP3g7ID//AXlUsm+Y+G11F5VnRG8eQ=='
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
