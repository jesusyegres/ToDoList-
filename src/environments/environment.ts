// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBJIi1_igrWCreWt1dQbezkF-v5U8VNLcQ",
    authDomain: "todolistapp-bcc34.firebaseapp.com",
    databaseURL: "https://todolistapp-bcc34.firebaseio.com",
    projectId: "todolistapp-bcc34",
    storageBucket: "todolistapp-bcc34.appspot.com",
    messagingSenderId: "1006566776138"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
