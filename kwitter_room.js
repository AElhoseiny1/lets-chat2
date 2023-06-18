var Username = window.localStorage.getItem("Username");

// Import the functions you need from the SDKs you need

console.log("not workinng")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgpUmbmQ8bB0OqY_bVYHGuySU_I90lm8M",
  authDomain: "lets-chat-f9eb6.firebaseapp.com",
  databaseURL: "https://lets-chat-f9eb6-default-rtdb.firebaseio.com",
  projectId: "lets-chat-f9eb6",
  storageBucket: "lets-chat-f9eb6.appspot.com",
  messagingSenderId: "19657723602",
  appId: "1:19657723602:web:7e69b970c4dd8710f2e70b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  


function logout(){
    window.open("index.html","_self");
    window.localStorage.removeItem("Username");
}

    function setUsername(){
    document.getElementById("User-name").innerHTML = Username;
    console.log("Username",Username)
    
}

window.addEventListener("DOMContentLoaded",setUsername);

function addRoom(){
    roomName = document.getElementById("addRoom").value
    localStorage.setItem("roomName", roomName);
    firebase.database().ref("/").child(roomName).update({
        purp:"Adam is excellent"
  })
    
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            Room_names = childKey;
   //Start code
            row = "<div class='room_name' id="+Room_names+" onclick = 'redirectRoomName(this.id)'>" +Room_names +"</div> <hr>"
            document.getElementById("output").innerHTML +=row
   //End code
    });});}
getData();
   function redirectRoomName(name){
         localStorage.setItem("room_name", name);
         
   }
