import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCN2oxqa1RTTvIXKBJmuQYOc5aF2PgXaqE",
  authDomain: "tutorial-firebase-8811f.firebaseapp.com",
  databaseURL: "https://tutorial-firebase-8811f.firebaseio.com",
  projectId: "utorial-firebase-8811f",
  storageBucket: "tutorial-firebase-8811f.appspot.com",
  messagingSenderId: "439426824364"
};
/*const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};*/

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
