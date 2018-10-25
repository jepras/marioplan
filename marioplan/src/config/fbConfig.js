import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCQUfnDAzeTArtRbSTdrM-k5SVvA5L5i14',
  authDomain: 'jepras-marioplan.firebaseapp.com',
  databaseURL: 'https://jepras-marioplan.firebaseio.com',
  projectId: 'jepras-marioplan',
  storageBucket: 'jepras-marioplan.appspot.com',
  messagingSenderId: '231467245607'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
