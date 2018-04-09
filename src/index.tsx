import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Hello from './containers/Hello';
import Authentication from './containers/Authentication';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
// import { enthusiasm, authentication } from './reducers/index';
// import { StoreState, AuthState } from './types/index';
import { rootReducer } from './reducers';
// import { rootReducer } from './reducers';

import * as fb from 'firebase/app';

require('firebase/firestore');
require('firebase/auth');
require('firebase/database');

const config = {
  apiKey: 'AIzaSyDRTDBOELfZjbOD59BzTmPMk1RsVHPHAUU',
  authDomain: 'my-awesome-project-32d11.firebaseapp.com',
  databaseURL: 'https://my-awesome-project-32d11.firebaseio.com',
  projectId: 'my-awesome-project-32d11',
  storageBucket: 'my-awesome-project-32d11.appspot.com',
  messagingSenderId: '378661633646'
};

const app = fb.initializeApp(config);
const auth = fb.auth();
const authProvider = new fb.auth.GoogleAuthProvider;

const fs = app.firestore();
const usersCollection = fs.collection('users');
usersCollection.get().then(users => {
  // users.docs.forEach((doc) => console.log(doc.id));
  for (let document of users.docs) {
    console.log('Document ID', document.id);
    usersCollection.doc(document.id).get().then(doc => {
      console.log('Document Data', doc.data());
    });
  }
});

function createUserWithProvider(provider: fb.auth.AuthProvider) {
  return auth.signInWithRedirect(provider).then(result => {
    console.log('Sign In Result', result);
    return auth.getRedirectResult();
  });
}

if (auth.currentUser != null) {
  createUserWithProvider(authProvider).then(result => {
      console.log('Redirect Result', result);
      if (result.credential) {
        var token = result.credential.accessToken;
        console.log('Token', token);
      }
      var user = result.user;
      console.log('Access Token', result.credential.accessToken);
      console.log('User', user);
    }).catch(error => {
      var errorCode = error.code;
      console.log('Error Code', errorCode);
      var errorMessage = error.message;
      console.log('Error Messaage', errorMessage);
      var email = error.email;
      console.log('Error Email', email);
      var credential = error.credential;
      console.log('Error Credential', credential);
    });
  // auth.getRedirectResult().then(result => {
  //   console.log('Result', result);
  //   if (result.credential) {
  //     var token = result.credential.accessToken;
  //     console.log('Token', token);
  //   }
  //   var user = result.user;
  //   console.log('Access Token', result.credential.accessToken);
  //   console.log('User', user);
  // }).catch(error => {
  //   var errorCode = error.code;
  //   console.log('Error Code', errorCode);
  //   var errorMessage = error.message;
  //   console.log('Error Messaage', errorMessage);
  //   var email = error.email;
  //   console.log('Error Email', email);
  //   var credential = error.credential;
  //   console.log('Error Credential', credential);
  // });
}
console.log('Current User', auth.currentUser);
// usersCollection.doc('test').get().then(doc => {
//   console.log(doc.data());
// });

const appStore = createStore(
  rootReducer,
  {
    // enthusiasm: {
    //   enthusiasmLevel: 11,
    //   languageName: 'TypeScript'
    // },
    authentication: {
      authenticated: false,
      userName: 'test username',
    },
    authenticated: false,
    userName: '',
    // enthusiasmLevel: 13,
    // languageName: 'TypeScript'
  }
);

const Root = () => {
  return (
    <React.Fragment>
      <Hello />
      <Authentication />
    </React.Fragment>
  );
};

ReactDOM.render(
  <Provider store={appStore} >
    <Root />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
