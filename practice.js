// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyARdcDOhphriXGuy6XpXTJh7OKSilyrzhE",
    authDomain: "kwitter-ee971.firebaseapp.com",
    databaseURL: "https://kwitter-ee971-default-rtdb.firebaseio.com",
    projectId: "kwitter-ee971",
    storageBucket: "kwitter-ee971.appspot.com",
    messagingSenderId: "52887448472",
    appId: "1:52887448472:web:b65ac115454f787890d9ed"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
