export const environment = {
  production: true,
  envName: 'local',
  keycloak: {
    // Url of the Identity Provider
    // issuer: 'http://swddcis2key01v/auth/',
    issuer: 'http://swddcis2key01v/auth/',

    // Realm
    // realm: 'Testing_kerberos',
    realm: 'CIS',

    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    // clientId: 'testing_frontend',
    clientId: 'cisapp',
    "credentials": {
      "secret": "535c1334-1563-426f-b582-b01ff0035513"
    }  
  }
};