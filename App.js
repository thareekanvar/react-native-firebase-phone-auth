import AppContainer from './src/AppContainer';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBUSWG1G3ZUF0_EY3y_pVh2-aZ54lN_44A',
    authDomain: 'workers-ef768.firebaseapp.com',
    databaseURL: 'https://workers-ef768.firebaseio.com',
    projectId: 'workers-ef768',
    storageBucket: 'workers-ef768.appspot.com',
    messagingSenderId: '208965765113'
};

firebase.initializeApp(firebaseConfig);

export default AppContainer;
