
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDV5q83lpYq8fhr-L0wak-jPIzUeGL3jbo",
      authDomain: "let-s-chat-bbf36.firebaseapp.com",
      databaseURL: "https://let-s-chat-bbf36-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-bbf36",
      storageBucket: "let-s-chat-bbf36.appspot.com",
      messagingSenderId: "979918357175",
      appId: "1:979918357175:web:b2d880a0102c8e83af8332"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
