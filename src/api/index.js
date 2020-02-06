import * as firebase from "firebase/app";
import dotenv from 'dotenv';

dotenv.config({
    silent: true,
});

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
  };
firebase.initializeApp(firebaseConfig);

// export apis
export * from './login';
export * from './alunos';
