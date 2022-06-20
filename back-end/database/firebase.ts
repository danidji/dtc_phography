import firebase from "firebase-admin"

const params = {
  type: process.env.SERVICE_ACCOUNT_TYPE,
  projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,
  privateKeyId: process.env.SERVICE_ACCOUNT_PRIVATE_KEY_ID,
  privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY ? process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
  clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
  clientId: process.env.SERVICE_ACCOUNT_CLIENT_ID,
  authUri: process.env.SERVICE_ACCOUNT_AUTH_URI,
  tokenUri: process.env.SERVICE_ACCOUNT_TOKEN_URI,
  authProviderX509CertUrl: process.env.SERVICE_ACCOUNT_AUTH_PROVIDER,
  clientC509CertUrl: process.env.SERVICE_ACCOUNT_CLIENT_CERT_URL,
};

if (!firebase.apps.length) {

  firebase.initializeApp({
    credential: firebase.credential.cert(params),
    databaseURL: 'https://lunysse-photographe-default-rtdb.europe-west1.firebasedatabase.app/',
  });
}

export const database = firebase.database();