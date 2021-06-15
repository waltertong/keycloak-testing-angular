// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'local',
  keycloak: {
    // Url of the Identity Provider
    // issuer: 'https://10.54.192.109:8091/auth/',
    issuer: 'http://swddcis2key01v/auth/',

    // Realm
    realm: 'kerberos-demo',
    // realm: 'CIS',

    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    // clientId: 'testing_frontend',
    clientId: 'cisapp',
    // "credentials": {
    //   "secret": "535c1334-1563-426f-b582-b01ff0035513"
    // }  
  }
};