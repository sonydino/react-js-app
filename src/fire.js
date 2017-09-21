import firebase from 'firebase'



    var config = {
    apiKey: "AIzaSyAw0cVmuzj71tYQGBFyZBsRquFaTlD4BpU",
    authDomain: "to-do-list-123.firebaseapp.com",
    databaseURL: "https://to-do-list-123.firebaseio.com",
    projectId: "to-do-list-123",
    storageBucket: "to-do-list-123.appspot.com",
    messagingSenderId: "637833309269"
  };
  var fire= firebase.initializeApp(config);
  export default fire;
