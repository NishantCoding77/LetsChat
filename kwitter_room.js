var firebaseConfig = {
  apiKey: "AIzaSyA_FZpWdJjGtzSR4oTgwoiwfyt3jbha_hg",
  authDomain: "letschat-69bda.firebaseapp.com",
  databaseURL: "https://letschat-69bda-default-rtdb.firebaseio.com",
  projectId: "letschat-69bda",
  storageBucket: "letschat-69bda.appspot.com",
  messagingSenderId: "849293960843",
  appId: "1:849293960843:web:9d0a91ad82f5190b55d68e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

   //add fb links//

  user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML= "Welcome  " + user_name + "  	&#128513";
  //  //
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      //   //
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  //  //
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }