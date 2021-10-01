import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcxf_1R5-MpwlV6q3YclXN71ArdugVb7U",
  authDomain: "netflix-62288.firebaseapp.com",
  projectId: "netflix-62288",
  storageBucket: "netflix-62288.appspot.com",
  messagingSenderId: "203810130897",
  appId: "1:203810130897:web:d317e9deb2a78800872ef0",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
