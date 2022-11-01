var firebaseConfig = {
    apiKey: "AIzaSyBeiBalveD5r3mNiVgsRcJ75txVN3bYRYg",
    authDomain: "kwitter-app-5072f.firebaseapp.com",
    databaseURL: "https://kwitter-app-5072f-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-5072f",
    storageBucket: "kwitter-app-5072f.appspot.com",
    messagingSenderId: "525734540611",
    appId: "1:525734540611:web:9e1d1abc83b398e62a6bf6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser() {
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"addingUser"    
});
}

