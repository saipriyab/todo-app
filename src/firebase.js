import firebase from "firebase";

const firebaseApp=firebase.initializeApp( {
    apiKey: "AIzaSyDNlpKBYk2_XuXDORrjNFsvWU7IHX-p6Zk",
    authDomain: "todo-app-f76d1.firebaseapp.com",
    projectId: "todo-app-f76d1",
    storageBucket: "todo-app-f76d1.appspot.com",
    messagingSenderId: "752258189048",
    appId: "1:752258189048:web:fbee8de20ca6ec6386dd0d",
    measurementId: "G-SPWE1H3GFG"
  });

  const db=firebaseApp.firestore();

  export default db;