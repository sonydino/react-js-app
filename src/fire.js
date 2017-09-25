import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCG67JFVH9t7kqA_DXppAr1XXCtCcwqj68",
    authDomain: "todoreact-c5024.firebaseapp.com",
    databaseURL: "https://first-f5806.firebaseio.com",
    projectId: "first-f5806",
    storageBucket: "first-f5806.appspot.com",
    messagingSenderId: "739045155604"
  };
  var fire=firebase.initializeApp(config);
  export default fire;