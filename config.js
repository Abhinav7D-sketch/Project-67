import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {  
        apiKey: "AIzaSyB2X9McEM1UGnbzcEhBAuedFY-0DDwNWFw",
        authDomain: "project-c67-51953.firebaseapp.com",
        projectId: "project-c67-51953",
        storageBucket: "project-c67-51953.appspot.com",
        messagingSenderId: "281583343571",
        appId: "1:281583343571:web:a617a303a6246f51fcc126"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();