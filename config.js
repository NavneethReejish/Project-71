import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyABivXWWcI3TKYWy-JAOXbDFtkjWiKDQHg",
  authDomain: "complaint-forum-ec73f.firebaseapp.com",
  projectId: "complaint-forum-ec73f",
  storageBucket: "complaint-forum-ec73f.appspot.com",
  messagingSenderId: "995734334561",
  appId: "1:995734334561:web:4def3eb657c001fb034e20"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

