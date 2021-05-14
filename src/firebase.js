import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAs76skeUg2zt98Be5AYq6GA0aibp7NGpc',
  authDomain: 'linked-in-clone-4ddc0.firebaseapp.com',
  projectId: 'linked-in-clone-4ddc0',
  storageBucket: 'linked-in-clone-4ddc0.appspot.com',
  messagingSenderId: '43160837886',
  appId: '1:43160837886:web:03cccc0c94c7d4f1784faf',
  measurementId: 'G-6TSRVX5HHH'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
