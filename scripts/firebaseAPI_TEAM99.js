//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyAmAINrFcDROBAFWq2steU5LQ6BXSc_YE0",
  authDomain: "hackthebreak-77859.firebaseapp.com",
  projectId: "hackthebreak-77859",
  storageBucket: "hackthebreak-77859.appspot.com",
  messagingSenderId: "1017671162794",
  appId: "1:1017671162794:web:5572c3a2e171bd47d6a9d3"
};


//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp( firebaseConfig );
const db = firebase.firestore();
const storage = firebase.storage();
