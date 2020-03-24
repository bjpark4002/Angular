// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


//installed firebase
//in project dir,
//run ' npm install --save firebase @angular/fire '


export const environment = {
  production: false
  ,firebaseConfig: {

    apiKey: "AIzaSyAFahvktacUKH8RGffxVEWSZnKIQTYi884",
    authDomain: "angularproject-c856e.firebaseapp.com",
    databaseURL: "https://angularproject-c856e.firebaseio.com",
    projectId: "angularproject-c856e",
    storageBucket: "angularproject-c856e.appspot.com",
    messagingSenderId: "237809462493"


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
