import { Injectable } from '@angular/core';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: '',
    authDomain: 'tienda-online-angular-ddf85.firebaseapp.com',
    databaseURL:
      'https://tienda-online-angular-ddf85-default-rtdb.firebaseio.com',
    projectId: 'tienda-online-angular-ddf85',
    storageBucket: 'tienda-online-angular-ddf85.firebasestorage.app',
    messagingSenderId: '204942673715',
    appId: '1:204942673715:web:184730632b3578ab9d6046',
  };

  public auth: Auth;
  public firestore: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firestore = getFirestore(app);
  }
}
