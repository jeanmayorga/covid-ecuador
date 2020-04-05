import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDdXrmc85ce1xCjqMlZwWPr6mVTUTjzVo4',
  authDomain: 'tus-10segundos.firebaseapp.com',
  databaseURL: 'https://tus-10segundos.firebaseio.com',
  projectId: 'tus-10segundos',
  storageBucket: 'tus-10segundos.appspot.com',
  messagingSenderId: '294818821195',
  appId: '1:294818821195:web:b437fa55d5d7f7d69fc9ce',
  measurementId: 'G-396V9T7NE4',
};

export interface FirebaseTypes {
  auth: app.auth.Auth;
  storage: app.storage.Storage;
  googleProvider: app.auth.AuthProvider;
}

class Firebase {
  auth: FirebaseTypes['auth'];
  storage: FirebaseTypes['storage'];
  googleProvider: FirebaseTypes['googleProvider'];
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.storage = app.storage();
    this.googleProvider = new app.auth.GoogleAuthProvider().addScope(
      'https://www.googleapis.com/auth/youtube.readonly',
    );
  }
}
export { Firebase };
