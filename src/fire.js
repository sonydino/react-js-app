import firebase from 'firebase'



  var config = {
    apiKey: "AIzaSyAPBY01vyrPjkG7ni7t74oYYPHNHC7d8To",
    authDomain: "react-project-7117.firebaseapp.com",
    databaseURL: "https://react-project-7117.firebaseio.com",
    projectId: "react-project-7117",
    storageBucket: "react-project-7117.appspot.com",
    messagingSenderId: "324642233528"
  };
  var fire=firebase.initializeApp(config);

  export default fire;