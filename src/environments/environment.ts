// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  mailchimp: {
    endpoint:
      'https://gmail.us17.list-manage.com/subscribe/post-json?u=b225d34145f6bd9adf5e9872f&amp;id=dba8312784&',
    code: 'b_b225d34145f6bd9adf5e9872f_dba8312784',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
