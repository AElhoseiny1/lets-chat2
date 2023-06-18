var Username
function addUser(){
  Username = document.getElementById("Username").value;
  window.localStorage.setItem("Username", Username);
  window.open("kwitter_room.html", "_self");
}
