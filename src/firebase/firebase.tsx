import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBFEpgsY-8DS3_1UtoWL4v1b5GqPj7oCdA',
  authDomain: 'coronavirus-ecuador.firebaseapp.com',
  databaseURL: 'https://coronavirus-ecuador.firebaseio.com',
  projectId: 'coronavirus-ecuador',
  storageBucket: 'coronavirus-ecuador.appspot.com',
  messagingSenderId: '888103941458',
  appId: '1:888103941458:web:436889d1518d3947a0f68b',
  measurementId: 'G-8QR8GKRW7E',
};

export interface FirebaseTypes {
  auth: app.auth.Auth;
  storage: app.storage.Storage;
  database: app.database.Database;
}

class Firebase {
  auth: FirebaseTypes['auth'];
  storage: FirebaseTypes['storage'];
  database: FirebaseTypes['database'];
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.storage = app.storage();
    this.database = app.database();
  }
}
export { Firebase };
