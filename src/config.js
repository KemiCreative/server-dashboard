const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyCTlX5vOfq0yD9qY749Z1XVTvKUrgkm0Ag',
  authDomain: 'server-installs.firebaseapp.com',
  databaseURL: 'https://server-installs.firebaseio.com',
  projectId: 'server-installs',
  storageBucket: 'server-installs.appspot.com',
  messagingSenderId: '1060536999832',
  appId: '1:1060536999832:web:69c1bfe955770924'
});

firebase
  .auth()
  .signInWithEmailAndPassword('mlsschut.dev@gmail.com', 'mikeschut')
  .catch(function(err) {
    console.log('Sign-In Error: ' + err);
  });

export const db = firebase.firestore();
