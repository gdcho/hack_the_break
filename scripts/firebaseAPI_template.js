//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {

};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp( firebaseConfig );
const db = firebase.firestore();
const storage = firebase.storage();
